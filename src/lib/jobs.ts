export const harvestNearestSource = (creep: Creep) => {
  creep.say('Harvesting')

  const nearestSource = creep.pos.findClosestByPath(FIND_SOURCES);
  
  if (creep.harvest(nearestSource) == ERR_NOT_IN_RANGE) {
    creep.moveTo(nearestSource, { maxRooms: 1 });
  }
}

export const repairNearbyStructures = (creep: Creep) => {
  const nearestStructureNeedingRepair = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
    filter: ({ hits, hitsMax }) => hits < hitsMax
  })

  if (nearestStructureNeedingRepair) {
    creep.say('Repairing')

    if (creep.repair(nearestStructureNeedingRepair) == ERR_NOT_IN_RANGE) {
      creep.moveTo(nearestStructureNeedingRepair, { maxRooms: 1 })
    }
  }
}

export const depositInNearestEnergyContainer = (creep: Creep) => {
  const closestAvailableEnergyContainer = creep.pos.findClosestByPath(FIND_STRUCTURES, {
    filter: (structure) => 
      (structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) &&
      structure.energy < structure.energyCapacity
  })

  if (closestAvailableEnergyContainer) {
    creep.say('Depositing')

    if (creep.transfer(closestAvailableEnergyContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
        creep.moveTo(closestAvailableEnergyContainer);
    }
  } else {
    creep.say('No available container for deposit')
  }
}

export const buildClosestContructionSite = (creep: Creep) => {
  const closestContructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES)

  if (closestContructionSite) {
    creep.say('Building')

    if (creep.build(closestContructionSite) == ERR_NOT_IN_RANGE) {
      creep.moveTo(closestContructionSite);
    }
  }
}

export const repairWalls = (creep: Creep) => {
  const closestRepairableWall = creep.pos.findClosestByPath(FIND_STRUCTURES, {
    filter: ({ hits, hitsMax, structureType }) => structureType == STRUCTURE_WALL && hits < hitsMax
  })

  if (closestRepairableWall) {
    creep.say('Repairing walls')

    if (creep.repair(closestRepairableWall[0]) == ERR_NOT_IN_RANGE) {
      creep.moveTo(closestRepairableWall[0], { maxRooms: 1 })
    }
  }
}

export const attackHostileCreeps = (creep: Creep) => {
  creep.say("Attacking!")

  const nearestEnemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
  if (creep.attack(nearestEnemy) == ERR_NOT_IN_RANGE) {
    creep.moveTo(nearestEnemy)
  }
}