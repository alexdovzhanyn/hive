import { spawnBluePrint as harvesterBlueprint } from './roles/role.harvester'
import { spawnBluePrint as builderBlueprint } from './roles/role.builder'
import { spawnBluePrint as defenderBlueprint } from './roles/role.defender'
import { spawnBluePrint as upgraderBlueprint } from './roles/role.upgrader'
import { Role } from '@hive/types/roles'

const roleToBlueprint = {
  [Role.Harvester]: harvesterBlueprint,
  [Role.Builder]: builderBlueprint,
  [Role.Defender]: defenderBlueprint,
  [Role.Upgrader]: upgraderBlueprint
}

const ROLE_SPAWN_PRIORITY = [
  Role.Harvester,
  Role.Builder,
  Role.Upgrader,
  Role.Defender
]

const basicSpawnStrategy = (existingCreepsByRole) => {
  const CREEP_POPULATION_REQUIREMENTS = {
    harvester: 3,
    builder: 2,
    defender: 2,
    upgrader: 2
  }
  
  for (const role of ROLE_SPAWN_PRIORITY) {
    if (existingCreepsByRole[role].length < CREEP_POPULATION_REQUIREMENTS[role]) {
      const { bodyParts, name, defaultMemory } = roleToBlueprint[role]
      const unitSpawnCost = bodyParts.reduce((acc, part) => acc + BODYPART_COST[part], 0)

      if (Game.spawns.Spawn1.store[RESOURCE_ENERGY] < unitSpawnCost) return

      console.log(`Total ${role}s: ${existingCreepsByRole[role].length}, need ${CREEP_POPULATION_REQUIREMENTS[role]}. Spawning new ${role}...`)
    
      const res = Game.spawns.Spawn1.spawnCreep(
        bodyParts,
        name + Math.floor(Math.random() * 100),
        {
          memory: defaultMemory
        }
      )

      console.log(res)

      return
    }
  }
}

const spawnStrategy2 = (existingCreepsByRole) => {
  
}

const spawnStrategyByControllerLevel = {
  2: spawnStrategy2
}

export default {
  spawn: (existingCreepsByRole: Record<Role, Creep[]>) => {
    if (Game.spawns.Spawn1.spawning) return

    if (Object.keys(Game.creeps).length < 3) return basicSpawnStrategy(existingCreepsByRole)

    let highestAvailableSpawnStrategy = spawnStrategyByControllerLevel[Game.spawns.Spawn1.room.controller.level]

    // Tries to find the next lowest spawn strategy if we dont have one for the current controller level
    while (!highestAvailableSpawnStrategy) {
      const controllerLevel = Game.spawns.Spawn1.room.controller.level - 1
      if (controllerLevel == 0) {
        highestAvailableSpawnStrategy = basicSpawnStrategy
      }

      highestAvailableSpawnStrategy = spawnStrategyByControllerLevel[controllerLevel]
    }
  }
};