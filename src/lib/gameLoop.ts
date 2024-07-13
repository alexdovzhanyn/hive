import roleHarvester from './role.harvester'
import roleUpgrader from './role.upgrader'
import roleDefender from './role.defender'
import roleBuilder from './role.builder'
// import autoSpawnCreeps from './auto.spawnCreeps'

export default () => {
    console.log("This script is running")
    const creepsByRole = {
      harvester: [],
      upgrader: [],
      defender: [],
      builder: []
    }

    const creepRoleJobExecutionFunctions = {
      harvester: roleHarvester,
      upgrader: roleUpgrader,
      defender: roleDefender,
      builder: roleBuilder
    }

    Object.values(Game.creeps).forEach(creep => {
      creepsByRole[creep.memory.role].push(creep)
      creepRoleJobExecutionFunctions[creep.memory.role]()
    })
    
    // autoSpawnCreeps.spawn(harvesters, builders, upgraders, defenders)
}