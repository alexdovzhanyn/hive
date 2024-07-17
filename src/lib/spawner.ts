import { getBlueprintForSpawnStrategy as getHarvesterBlueprint } from './creeps/role.harvester'
import { getBlueprintForSpawnStrategy as getBuilderBlueprint } from './creeps/role.builder'
import { getBlueprintForSpawnStrategy as getDefenderBlueprint } from './creeps/role.defender'
import { getBlueprintForSpawnStrategy as getUpgraderBlueprint } from './creeps/role.upgrader'
import { getBlueprintForSpawnStrategy as getMissionaryBlueprint } from './creeps/role.missionary'
import { creepNames } from '@hive/config.json'
import { Role } from '@hive/types/roles'
import { SpawnStrategy } from '@hive/types/spawn'

const roleToBlueprint = {
  [Role.Harvester]: getHarvesterBlueprint,
  [Role.Builder]: getBuilderBlueprint,
  [Role.Defender]: getDefenderBlueprint,
  [Role.Upgrader]: getUpgraderBlueprint,
  [Role.Missionary]: getMissionaryBlueprint
}

const ROLE_SPAWN_PRIORITY = [
  Role.Harvester,
  Role.Builder,
  Role.Upgrader,
  Role.Defender
]

export const attemptSpawnCreep = (role: Role, spawnStrategy: SpawnStrategy) => {
  const { bodyParts, name, defaultMemory } = roleToBlueprint[role](spawnStrategy)

  const energyStructures = Game.spawns.Spawn1.room.find(FIND_MY_STRUCTURES, {
    filter: { structureType: STRUCTURE_EXTENSION }
  }) as (StructureSpawn | StructureExtension)[]

  energyStructures.push(Game.spawns.Spawn1)


  const creepName = creepNames[Math.floor(Math.random() * 100)] + ` (${name})`
  const opts = { memory: defaultMemory, energyStructures }

  const dryRun = Game.spawns.Spawn1.spawnCreep(
    bodyParts,
    creepName,
    { ...opts, dryRun: true }
  )

  if (dryRun != OK) return

  const spawnAttempt = Game.spawns.Spawn1.spawnCreep(
    bodyParts,
    creepName,
    opts
  )

  if (spawnAttempt != OK) {
    console.log(`Couldn't spawn creep: ${spawnAttempt}`)
  }
}

const basicSpawnStrategy = (existingCreepsByRole) => {
  const CREEP_POPULATION_REQUIREMENTS = {
    harvester: 3,
    builder: 2,
    defender: 2,
    upgrader: 2
  }

  let allPopulationRequirementsSatisfied = true

  for (const role of ROLE_SPAWN_PRIORITY) {
    if (existingCreepsByRole[role].length < CREEP_POPULATION_REQUIREMENTS[role]) {
      allPopulationRequirementsSatisfied = false

      //console.log(`Total ${role}s: ${existingCreepsByRole[role].length}, need ${CREEP_POPULATION_REQUIREMENTS[role]}. Attemptying to spawn new ${role}...`)

      return attemptSpawnCreep(role, SpawnStrategy.Tier1)
    }
  }

  if (allPopulationRequirementsSatisfied) {
    attemptSpawnCreep(Role.Builder, SpawnStrategy.Tier1)
  }
}

const spawnStrategyTier2 = (existingCreepsByRole) => {
  const CREEP_POPULATION_REQUIREMENTS = {
    harvester: 5,
    builder: 3,
    defender: 3,
    upgrader: 3
  }

  let allPopulationRequirementsSatisfied = true

  for (const role of ROLE_SPAWN_PRIORITY) {
    if (existingCreepsByRole[role].length < CREEP_POPULATION_REQUIREMENTS[role]) {
      allPopulationRequirementsSatisfied = false

      //console.log(`Total ${role}s: ${existingCreepsByRole[role].length}, need ${CREEP_POPULATION_REQUIREMENTS[role]}. Attemptying to spawn new ${role}...`)

      return attemptSpawnCreep(role, SpawnStrategy.Tier2)
    }
  }

  if (allPopulationRequirementsSatisfied) {
    attemptSpawnCreep(Role.Builder, SpawnStrategy.Tier2)
  }
}

const spawnStrategyByControllerLevel = {
  [SpawnStrategy.Tier1]: basicSpawnStrategy,
  [SpawnStrategy.Tier2]: spawnStrategyTier2
}

export default {
  spawn: (existingCreepsByRole: Record<Role, Creep[]>) => {
    if (!Memory.allowAutoSpawn || Game.spawns.Spawn1.spawning) return

    if (Object.keys(Game.creeps).length < 3) return basicSpawnStrategy(existingCreepsByRole)

    let controllerLevel = Game.spawns.Spawn1.room.controller.level

    let highestAvailableSpawnStrategy = spawnStrategyByControllerLevel[controllerLevel]

    // Tries to find the next lowest spawn strategy if we dont have one for the current controller level
    while (!highestAvailableSpawnStrategy) {
      controllerLevel--

      if (controllerLevel == 0) {
        highestAvailableSpawnStrategy = basicSpawnStrategy
        break
      }

      highestAvailableSpawnStrategy = spawnStrategyByControllerLevel[controllerLevel]
    }

    highestAvailableSpawnStrategy(existingCreepsByRole);
  }
};
