import roleHarvester from './role.harvester'
import roleUpgrader from './role.upgrader'
import roleDefender from './role.defender'
import roleBuilder from './role.builder'
import autoSpawnCreeps from './auto.spawnCreeps'

const loop = function () {
    var harvesters = []
    var upgraders = []
    var defenders = []
    var builders = []
    
    for(var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == "harvester") {
            roleHarvester.run(creep);
            harvesters.push(creep);
        }
        if (creep.memory.role == "upgrader") {
            roleUpgrader.run(creep);
            upgraders.push(creep);
        }
        if (creep.memory.role == "defender") {
            roleDefender.run(creep);
            defenders.push(creep);
        }
        if (creep.memory.role == "builder") {
            roleBuilder.run(creep);
            builders.push(creep);
        }
    }
    
    autoSpawnCreeps.spawn(harvesters, builders, upgraders, defenders);
    
}

export default loop