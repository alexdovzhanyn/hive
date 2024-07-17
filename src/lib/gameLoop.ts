import roleHarvester from './creeps/role.harvester'
import roleUpgrader from './creeps/role.upgrader'
import roleDefender from './creeps/role.defender'
import roleBuilder from './creeps/role.builder'
import roleMissionary from './creeps/role.missionary'
import spawner, { attemptSpawnCreep } from './spawner'
import { Role } from '@hive/types/roles'
import { attackHostileCreeps } from './towers/jobs'

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

  const towers = Game.spawns.Spawn1.room.find(FIND_MY_STRUCTURES, {
    filter: ({ structureType }) => structureType == STRUCTURE_TOWER
  })

  towers.forEach(tower => {
    attackHostileCreeps(tower as StructureTower)
  })

  spawner.spawn(creepsByRole)
}
