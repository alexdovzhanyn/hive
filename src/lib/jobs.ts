const announceJob = (creep, job) => {
  if (creep.memory.lastAnnouncement != job) {
    creep.say(job)
    creep.memory.lastAnnouncement = job
  }
}

enum JobColor {
  Harvesting = '#A4E4B8',
  Repairing = '#D4B798',
  Depositing = '#F4E19A',
  Building = '#A3C1E0',
  Attacking = '#EFA4A4'
}

const PATH_STYLES = {
  opacity: 0.4
}

export const harvestNearestSource = (creep: Creep) => {
  let performingJob = true
  announceJob(creep, 'Harvesting')

  const nearestSource = creep.pos.findClosestByPath(FIND_SOURCES);
  
  if (creep.harvest(nearestSource) == ERR_NOT_IN_RANGE) {
    creep.moveTo(
      nearestSource, 
      {
        maxRooms: 1,
        visualizePathStyle: { ...PATH_STYLES, stroke: JobColor.Harvesting } 
      }
    )
  }

  return performingJob
}

export const repairNearbyStructures = (creep: Creep) => {
  let performingJob = false

  const nearestStructureNeedingRepair = creep.pos.findClosestByPath(FIND_MY_STRUCTURES, {
    filter: ({ hits, hitsMax }) => hits < hitsMax
  })

  if (nearestStructureNeedingRepair) {
    announceJob(creep, 'Repairing')
    performingJob = true
    
    if (creep.repair(nearestStructureNeedingRepair) == ERR_NOT_IN_RANGE) {
      creep.moveTo(
        nearestStructureNeedingRepair,
        {
          maxRooms: 1,
          visualizePathStyle: { ...PATH_STYLES, stroke: JobColor.Repairing } 
        }
      )
    }
  }

  return performingJob
}

export const depositInNearestEnergyContainer = (creep: Creep) => {
  let performingJob = false

  const closestAvailableEnergyContainer = creep.pos.findClosestByPath(FIND_STRUCTURES, {
    filter: (structure) => 
      (structure.structureType === STRUCTURE_EXTENSION || structure.structureType === STRUCTURE_SPAWN) &&
      structure.energy < structure.energyCapacity
  })

  if (closestAvailableEnergyContainer) {
    announceJob(creep, 'Depositing')
    performingJob = true

    if (creep.transfer(closestAvailableEnergyContainer, RESOURCE_ENERGY) === ERR_NOT_IN_RANGE) {
      creep.moveTo(
        closestAvailableEnergyContainer,
        {
          maxRooms: 1,
          visualizePathStyle: { ...PATH_STYLES, stroke: JobColor.Depositing } 
        }
      )
    }
  } else {
    creep.say('No available container for deposit')
  }

  return performingJob
}

export const buildClosestContructionSite = (creep: Creep) => {
  let performingJob = false
  const closestContructionSite = creep.pos.findClosestByPath(FIND_CONSTRUCTION_SITES)

  if (closestContructionSite) {
    announceJob(creep, 'Building')
    performingJob = true

    if (creep.build(closestContructionSite) == ERR_NOT_IN_RANGE) {
      creep.moveTo(
        closestContructionSite,
        {
          maxRooms: 1,
          visualizePathStyle: { ...PATH_STYLES, stroke: JobColor.Building } 
        }
      )
    }
  }

  return performingJob
}

export const repairWalls = (creep: Creep) => {
  let performingJob = false
  const closestRepairableWall = creep.pos.findClosestByPath(FIND_STRUCTURES, {
    filter: ({ hits, hitsMax, structureType }) => structureType == STRUCTURE_WALL && hits < hitsMax
  })

  if (closestRepairableWall) {
    announceJob(creep, 'Fixing Walls')
    performingJob = true

    if (creep.repair(closestRepairableWall) == ERR_NOT_IN_RANGE) {
      creep.moveTo(
        closestRepairableWall, 
        {
          maxRooms: 1,
          visualizePathStyle: { ...PATH_STYLES, stroke: JobColor.Repairing } 
        }
      )
    }
  }

  return performingJob
}

export const attackHostileCreeps = (creep: Creep) => {
  let performingJob = true
  announceJob(creep, "Attacking!")

  const nearestEnemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
  if (creep.attack(nearestEnemy) == ERR_NOT_IN_RANGE) {
    creep.moveTo(
      nearestEnemy,
      {
        maxRooms: 1,
        visualizePathStyle: { ...PATH_STYLES, stroke: JobColor.Attacking } 
      }
    )
  }

  return performingJob
}