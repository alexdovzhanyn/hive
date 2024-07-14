import { Role, UnitSpawnBlueprint } from '@hive/types/roles'
import { harvestNearestSource } from '@hive/lib/jobs';

export const spawnBluePrint: UnitSpawnBlueprint = {
  bodyParts: [WORK, WORK, CARRY, MOVE],
  name: 'Harvester',
  defaultMemory: {
    role: Role.Harvester
  }
}

export default {
  

  /** @param {Creep} creep **/
  run: function(creep: Creep) {
    if(creep.carry.energy < creep.carryCapacity) {
      harvestNearestSource(creep)
    } else {
      const targets = creep.room.find(FIND_STRUCTURES, {
        filter: (structure) => {
          return (structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) &&
                 structure.energy < structure.energyCapacity;
        }
      });
      if(targets.length > 0) {
        if(creep.transfer(targets[0], RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
          creep.moveTo(targets[0]);
        }
      }
    }
  }
};
