import { Role, UnitSpawnBlueprint } from '@hive/types/roles'
import { harvestNearestSource } from '@hive/lib/jobs';

export const spawnBluePrint: UnitSpawnBlueprint = {
  bodyParts: [WORK, CARRY, ATTACK, MOVE],
  name: 'Defender',
  defaultMemory: {
    role: Role.Defender
  }
}

export default {

  /** @param {Creep} creep **/
  run: function(creep) {
    if (creep.room.find(FIND_HOSTILE_CREEPS).length > 0 && creep.carry.energy > creep.carryCapacity / 5) {
      creep.say("attacking")
      var nearestEnemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
      if(creep.attack(nearestEnemy) == ERR_NOT_IN_RANGE) {
          creep.moveTo(nearestEnemy);
      }
    }
    else if (creep.room.find(FIND_HOSTILE_CREEPS).length == 0 && creep.memory.canUpgrade == true) {
      if(creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE && creep.memory.canUpgrade) {
        creep.moveTo(creep.room.controller);    
      }
      if (creep.carry.energy < 1) {
        creep.say("harvesting");
        creep.memory.canUpgrade = false;
      }
    }
    else {
      harvestNearestSource(creep)

      if (creep.carry.energy == creep.carryCapacity) {
        creep.say("upgrading");
        creep.memory.canUpgrade = true
      }
    }
  }
};