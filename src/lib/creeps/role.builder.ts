import { Role, UnitSpawnBlueprint } from '@hive/types/roles'
import {
  harvestNearestSource,
  repairNearbyStructures,
  depositInNearestEnergyContainer,
  buildClosestContructionSite,
  repairWalls
} from '@hive/lib/creeps/jobs'
import { SpawnStrategy } from '@hive/types/spawn'

const defaultBlueprint: UnitSpawnBlueprint = {
  bodyParts: [WORK, CARRY, CARRY, MOVE, MOVE],
  name: 'Builder',
  defaultMemory: {
    role: Role.Builder
  }
}

export const getBlueprintForSpawnStrategy = (strat: SpawnStrategy) => {
  const blueprintToStrategy = {
    [SpawnStrategy.Tier1]: defaultBlueprint,
    [SpawnStrategy.Tier2]: {
      ...defaultBlueprint,
      bodyParts: [...defaultBlueprint.bodyParts, WORK, MOVE]
    }
  }

  return blueprintToStrategy[strat]
}

export default {
  /** @param {Creep} creep **/
  run: function(creep) {
    if (creep.memory.building && creep.carry.energy == 0) {
      creep.memory.building = false
    }

    if (!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
      creep.memory.building = true
    }

    if (creep.memory.building) {
      if (repairNearbyStructures(creep)) return

      if (buildClosestContructionSite(creep)) return

      repairWalls(creep)
    } else {
      if (harvestNearestSource(creep)) return

      if (creep.carry.energy == creep.carryCapacity) {
        depositInNearestEnergyContainer(creep)
      }
    }
  }
};
