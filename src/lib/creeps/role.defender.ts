import { Role, UnitSpawnBlueprint } from '@hive/types/roles'
import { allies } from '@hive/config.json'
import { harvestNearestSource, attackHostileCreeps } from '@hive/lib/creeps/jobs';
import { SpawnStrategy } from '@hive/types/spawn'

const defaultBlueprint: UnitSpawnBlueprint = {
  bodyParts: [WORK, CARRY, ATTACK, MOVE],
  name: 'Defender',
  defaultMemory: {
    role: Role.Defender
  }
}

export const getBlueprintForSpawnStrategy = (strat: SpawnStrategy) => {
  const blueprintToStrategy = {
    [SpawnStrategy.Tier1]: defaultBlueprint,
    [SpawnStrategy.Tier2]: {
      ...defaultBlueprint,
      bodyParts: [...defaultBlueprint.bodyParts, ATTACK, MOVE]
    }
  }

  return blueprintToStrategy[strat]
}

export default {

  /** @param {Creep} creep **/
  run: function(creep) {
    const hostileCreeps = creep.room.find(FIND_HOSTILE_CREEPS, {
      filter: ({ owner }) => !allies.includes(owner.username)
    })

    if (hostileCreeps.length > 0 && creep.carry.energy > creep.carryCapacity / 5) {
      attackHostileCreeps(creep)
    } else if (creep.room.find(FIND_HOSTILE_CREEPS).length == 0 && creep.memory.canUpgrade == true) {
      if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE && creep.memory.canUpgrade) {
        creep.moveTo(creep.room.controller);
      }

      if (creep.carry.energy < 1) {
        creep.memory.canUpgrade = false
      }
    }
    else {
      harvestNearestSource(creep)

      if (creep.carry.energy == creep.carryCapacity) {
        creep.say("Upgrading");
        creep.memory.canUpgrade = true
      }
    }
  }
};
