import { allies } from '@hive/config.json'

export const attackHostileCreeps = (tower: StructureTower) => {
  const enemiesWithinRange = tower.pos.findInRange(FIND_HOSTILE_CREEPS, 12, {
    filter: ({ owner }) => !allies.includes(owner.username)
  })

  if (!enemiesWithinRange) return

  const closestEnemy = enemiesWithinRange.sort((e1, e2) => e2.pos.getRangeTo(tower) - e1.pos.getRangeTo(tower))[0]

  tower.attack(closestEnemy)
}
