import roleHarvester from './roles/role.harvester'
import roleUpgrader from './roles/role.upgrader'
import roleDefender from './roles/role.defender'
import roleBuilder from './roles/role.builder'
import spawner, { attemptSpawnCreep } from './spawner'
import { Role } from '@hive/types/roles'
import roleMissionary from './roles/role.missionary'

export default () => {
  if (!global.spawnCreep) {
    global.spawnCreep = attemptSpawnCreep
  }

  const creepsByRole = {
    [Role.Harvester]: [],
    [Role.Upgrader]: [],
    [Role.Defender]: [],
    [Role.Builder]: [],
    [Role.Missionary]: []
  }

  const creepRoleJobExecutionFunctions = {
    harvester: roleHarvester,
    upgrader: roleUpgrader,
    defender: roleDefender,
    builder: roleBuilder,
    missionary: roleMissionary
  }

  Object.values(Game.creeps).forEach(creep => {
    creepsByRole[creep.memory.role].push(creep)
    creepRoleJobExecutionFunctions[creep.memory.role].run(creep)
  })

  for (var i in Memory.creeps) {
    if (!Game.creeps[i]) {
      delete Memory.creeps[i];
    }
  }

  spawner.spawn(creepsByRole)
}
