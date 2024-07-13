import roleHarvester from './role.harvester';
import roleUpgrader from './role.upgrader';
import roleDefender from './role.defender';
import roleBuilder from './role.builder';
// import autoSpawnCreeps from './auto.spawnCreeps'
export default () => {
    console.log("This script is running");
    const creepsByRole = {
        harvester: [],
        upgrader: [],
        defender: [],
        builder: []
    };
    const creepRoleJobExecutionFunctions = {
        harvester: roleHarvester,
        upgrader: roleUpgrader,
        defender: roleDefender,
        builder: roleBuilder
    };
    Object.values(Game.creeps).forEach(creep => {
        creepsByRole[creep.memory.role].push(creep);
        creepRoleJobExecutionFunctions[creep.memory.role]();
    });
    // autoSpawnCreeps.spawn(harvesters, builders, upgraders, defenders)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZUxvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2dhbWVMb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLE9BQU8sYUFBYSxNQUFNLGtCQUFrQixDQUFBO0FBQzVDLE9BQU8sWUFBWSxNQUFNLGlCQUFpQixDQUFBO0FBQzFDLE9BQU8sWUFBWSxNQUFNLGlCQUFpQixDQUFBO0FBQzFDLE9BQU8sV0FBVyxNQUFNLGdCQUFnQixDQUFBO0FBQ3hDLG1EQUFtRDtBQUVuRCxlQUFlLEdBQUcsRUFBRTtJQUNoQixPQUFPLENBQUMsR0FBRyxDQUFDLHdCQUF3QixDQUFDLENBQUE7SUFDckMsTUFBTSxZQUFZLEdBQUc7UUFDbkIsU0FBUyxFQUFFLEVBQUU7UUFDYixRQUFRLEVBQUUsRUFBRTtRQUNaLFFBQVEsRUFBRSxFQUFFO1FBQ1osT0FBTyxFQUFFLEVBQUU7S0FDWixDQUFBO0lBRUQsTUFBTSw4QkFBOEIsR0FBRztRQUNyQyxTQUFTLEVBQUUsYUFBYTtRQUN4QixRQUFRLEVBQUUsWUFBWTtRQUN0QixRQUFRLEVBQUUsWUFBWTtRQUN0QixPQUFPLEVBQUUsV0FBVztLQUNyQixDQUFBO0lBRUQsTUFBTSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxFQUFFO1FBQ3pDLFlBQVksQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQTtRQUMzQyw4QkFBOEIsQ0FBQyxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUE7SUFDckQsQ0FBQyxDQUFDLENBQUE7SUFFRixvRUFBb0U7QUFDeEUsQ0FBQyxDQUFBIn0=