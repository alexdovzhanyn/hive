import { Role, UnitSpawnBlueprint } from '@hive/types/roles'
import { harvestNearestSource } from '../jobs'
import { SpawnStrategy } from '@hive/types/spawn'

const defaultBlueprint: UnitSpawnBlueprint = {
  bodyParts: [WORK, CARRY, CARRY, MOVE, MOVE],
  name: 'Upgrader',
  defaultMemory: {
    role: Role.Upgrader
  }
}

export const getBlueprintForSpawnStrategy = (strat: SpawnStrategy) => {
  const blueprintToStrategy = {
    [SpawnStrategy.Tier1]: defaultBlueprint,
    [SpawnStrategy.Tier2]: {
      ...defaultBlueprint,
      bodyParts: [ ...defaultBlueprint.bodyParts, WORK, MOVE ]
    }
  }

  return blueprintToStrategy[strat]
}

export default {
  /** @param {Creep} creep **/
  run: function(creep) {
    if(creep.memory.upgrading && creep.carry.energy == 0) {
      creep.memory.upgrading = false;
      creep.say('harvesting');
    }

    if(!creep.memory.upgrading && creep.carry.energy == creep.carryCapacity) {
      creep.memory.upgrading = true;
      creep.say('upgrading');
    }

    if(creep.memory.upgrading) {
      if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE) {
        creep.moveTo(creep.room.controller);
      }
    } else {
      harvestNearestSource(creep)
    }
  }
};
