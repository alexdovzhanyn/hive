import { Role, UnitSpawnBlueprint } from '@hive/types/roles'
import { depositInNearestEnergyContainer, harvestNearestSource } from '@hive/lib/jobs'
import { SpawnStrategy } from '@hive/types/spawn'

const defaultBlueprint: UnitSpawnBlueprint = {
  bodyParts: [WORK, WORK, CARRY, MOVE],
  name: 'Harvester',
  defaultMemory: {
    role: Role.Harvester
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
  run: function(creep: Creep) {
    if(creep.carry.energy < creep.carryCapacity) {
      harvestNearestSource(creep)
    } else {
      depositInNearestEnergyContainer(creep)
    }
  }
};
