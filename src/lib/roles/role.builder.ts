import { Role, UnitSpawnBlueprint } from '@hive/types/roles'
import { harvestNearestSource, repairNearbyStructures } from '@hive/lib/jobs'

export const spawnBluePrint: UnitSpawnBlueprint = {
  bodyParts: [WORK, CARRY, CARRY, MOVE, MOVE],
  name: 'Builder',
  defaultMemory: {
    role: Role.Builder
  }
}

export default {
    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.building && creep.carry.energy == 0) {
            creep.memory.building = false;
            creep.say('harvesting');
	    }
	    if(!creep.memory.building && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.building = true;
	        creep.say('building');
	    }

	    if(creep.memory.building) {
            repairNearbyStructures(creep)
            
	        var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
            if(targets.length) {
                if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0]);
                }
            }
	    } else {
	        harvestNearestSource(creep)
	    }
	}
};
