import roleHarvester from './roles/role.harvester'
import roleUpgrader from './roles/role.upgrader'
import roleDefender from './roles/role.defender'
import roleBuilder from './roles/role.builder'
import spawner from './spawner'
import { Role } from '@hive/types/roles'

export default () => {
    const creepsByRole = {
      [Role.Harvester]: [],
      [Role.Upgrader]: [],
      [Role.Defender]: [],
      [Role.Builder]: []
    }
    
    const creepRoleJobExecutionFunctions = {
      harvester: roleHarvester,
      upgrader: roleUpgrader,
      defender: roleDefender,
      builder: roleBuilder
    }

    Object.values(Game.creeps).forEach(creep => {
      creepsByRole[creep.memory.role].push(creep)
      creepRoleJobExecutionFunctions[creep.memory.role].run(creep)
    })
    
    spawner.spawn(creepsByRole)
}