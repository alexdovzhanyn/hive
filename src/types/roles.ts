export enum Role {
  Harvester = 'harvester',
  Builder = 'builder',
  Upgrader = 'upgrader',
  Defender = 'defender'
}

export interface UnitSpawnBlueprint {
  bodyParts: BodyPartConstant[],
  name: string,
  defaultMemory: CreepMemory
}