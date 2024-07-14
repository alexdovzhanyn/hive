export const harvestNearestSource = (creep: Creep) => {
  const nearestSource = creep.pos.findClosestByPath(FIND_SOURCES);
  
  if (creep.harvest(nearestSource) == ERR_NOT_IN_RANGE) {
    creep.moveTo(nearestSource, { maxRooms: 1 });
  }
}

export const repairNearbyStructures = (creep: Creep) => {
  const nearbyStructures = creep.pos.findInRange(FIND_MY_STRUCTURES, 25)
  const structuresNeedingRepair = nearbyStructures.filter(str => str.hits < str.hitsMax)

  if (structuresNeedingRepair) {
    if (creep.repair(structuresNeedingRepair[0]) == ERR_NOT_IN_RANGE) {
      creep.moveTo(structuresNeedingRepair[0], { maxRooms: 1 })
    }
  }
}