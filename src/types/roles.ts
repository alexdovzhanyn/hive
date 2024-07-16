export enum Role {
  Harvester = 'harvester',
  Builder = 'builder',
  Upgrader = 'upgrader',
  Defender = 'defender',
  Missionary = 'missionary'
}

export interface UnitSpawnBlueprint {
  bodyParts: BodyPartConstant[],
  name: string,
  defaultMemory: CreepMemory
}
