"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const role_harvester_1 = __importDefault(require("./role.harvester"));
const role_upgrader_1 = __importDefault(require("./role.upgrader"));
const role_defender_1 = __importDefault(require("./role.defender"));
const role_builder_1 = __importDefault(require("./role.builder"));
// import autoSpawnCreeps from './auto.spawnCreeps'
exports.default = () => {
    console.log("This script is running");
    const creepsByRole = {
        harvester: [],
        upgrader: [],
        defender: [],
        builder: []
    };
    const creepRoleJobExecutionFunctions = {
        harvester: role_harvester_1.default,
        upgrader: role_upgrader_1.default,
        defender: role_defender_1.default,
        builder: role_builder_1.default
    };
    Object.values(Game.creeps).forEach(creep => {
        creepsByRole[creep.memory.role].push(creep);
        creepRoleJobExecutionFunctions[creep.memory.role]();
    });
    // autoSpawnCreeps.spawn(harvesters, builders, upgraders, defenders)
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZUxvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2dhbWVMb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0VBQTRDO0FBQzVDLG9FQUEwQztBQUMxQyxvRUFBMEM7QUFDMUMsa0VBQXdDO0FBQ3hDLG1EQUFtRDtBQUVuRCxrQkFBZSxHQUFHLEVBQUU7SUFDaEIsT0FBTyxDQUFDLEdBQUcsQ0FBQyx3QkFBd0IsQ0FBQyxDQUFBO0lBQ3JDLE1BQU0sWUFBWSxHQUFHO1FBQ25CLFNBQVMsRUFBRSxFQUFFO1FBQ2IsUUFBUSxFQUFFLEVBQUU7UUFDWixRQUFRLEVBQUUsRUFBRTtRQUNaLE9BQU8sRUFBRSxFQUFFO0tBQ1osQ0FBQTtJQUVELE1BQU0sOEJBQThCLEdBQUc7UUFDckMsU0FBUyxFQUFFLHdCQUFhO1FBQ3hCLFFBQVEsRUFBRSx1QkFBWTtRQUN0QixRQUFRLEVBQUUsdUJBQVk7UUFDdEIsT0FBTyxFQUFFLHNCQUFXO0tBQ3JCLENBQUE7SUFFRCxNQUFNLENBQUMsTUFBTSxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQUU7UUFDekMsWUFBWSxDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFBO1FBQzNDLDhCQUE4QixDQUFDLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQTtJQUNyRCxDQUFDLENBQUMsQ0FBQTtJQUVGLG9FQUFvRTtBQUN4RSxDQUFDLENBQUEifQ==