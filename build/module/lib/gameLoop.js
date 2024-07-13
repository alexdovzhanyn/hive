import roleHarvester from './role.harvester';
import roleUpgrader from './role.upgrader';
import roleDefender from './role.defender';
import roleBuilder from './role.builder';
import autoSpawnCreeps from './auto.spawnCreeps';
const loop = function () {
    var harvesters = [];
    var upgraders = [];
    var defenders = [];
    var builders = [];
    for (var name in Game.creeps) {
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
};
export default loop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZUxvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2dhbWVMb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sYUFBYSxNQUFNLGtCQUFrQixDQUFBO0FBQzVDLE9BQU8sWUFBWSxNQUFNLGlCQUFpQixDQUFBO0FBQzFDLE9BQU8sWUFBWSxNQUFNLGlCQUFpQixDQUFBO0FBQzFDLE9BQU8sV0FBVyxNQUFNLGdCQUFnQixDQUFBO0FBQ3hDLE9BQU8sZUFBZSxNQUFNLG9CQUFvQixDQUFBO0FBRWhELE1BQU0sSUFBSSxHQUFHO0lBQ1QsSUFBSSxVQUFVLEdBQUcsRUFBRSxDQUFBO0lBQ25CLElBQUksU0FBUyxHQUFHLEVBQUUsQ0FBQTtJQUNsQixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUE7SUFDbEIsSUFBSSxRQUFRLEdBQUcsRUFBRSxDQUFBO0lBRWpCLEtBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sRUFBRTtRQUN6QixJQUFJLEtBQUssR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDO1FBQzlCLElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksV0FBVyxFQUFFO1lBQ2xDLGFBQWEsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDekIsVUFBVSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUMxQjtRQUNELElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFFO1lBQ2pDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtRQUNELElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFFO1lBQ2pDLFlBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtRQUNELElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksU0FBUyxFQUFFO1lBQ2hDLFdBQVcsQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDdkIsUUFBUSxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN4QjtLQUNKO0lBRUQsZUFBZSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUV0RSxDQUFDLENBQUE7QUFFRCxlQUFlLElBQUksQ0FBQSJ9