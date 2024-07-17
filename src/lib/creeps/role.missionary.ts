import { Role, UnitSpawnBlueprint } from '@hive/types/roles'
import { captureFlaggedRoom, harvestNearestSource } from '@hive/lib/creeps/jobs'

const defaultBlueprint: UnitSpawnBlueprint = {
  bodyParts: [MOVE, MOVE, MOVE, CLAIM, CARRY, CARRY, WORK],
  name: 'Missionary',
  defaultMemory: {
    role: Role.Missionary
  }
}

// The missionary will always be the same
export const getBlueprintForSpawnStrategy = () => {
  return defaultBlueprint
}

export default {
  run: (creep: Creep) => {
    if (captureFlaggedRoom) return

    harvestNearestSource(creep)
  }
}
