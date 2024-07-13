"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const role_harvester_1 = __importDefault(require("./role.harvester"));
const role_upgrader_1 = __importDefault(require("./role.upgrader"));
const role_defender_1 = __importDefault(require("./role.defender"));
const role_builder_1 = __importDefault(require("./role.builder"));
const auto_spawnCreeps_1 = __importDefault(require("./auto.spawnCreeps"));
const loop = function () {
    var harvesters = [];
    var upgraders = [];
    var defenders = [];
    var builders = [];
    for (var name in Game.creeps) {
        var creep = Game.creeps[name];
        if (creep.memory.role == "harvester") {
            role_harvester_1.default.run(creep);
            harvesters.push(creep);
        }
        if (creep.memory.role == "upgrader") {
            role_upgrader_1.default.run(creep);
            upgraders.push(creep);
        }
        if (creep.memory.role == "defender") {
            role_defender_1.default.run(creep);
            defenders.push(creep);
        }
        if (creep.memory.role == "builder") {
            role_builder_1.default.run(creep);
            builders.push(creep);
        }
    }
    auto_spawnCreeps_1.default.spawn(harvesters, builders, upgraders, defenders);
};
exports.default = loop;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZ2FtZUxvb3AuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi8uLi9zcmMvbGliL2dhbWVMb29wLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7O0FBQUEsc0VBQTRDO0FBQzVDLG9FQUEwQztBQUMxQyxvRUFBMEM7QUFDMUMsa0VBQXdDO0FBQ3hDLDBFQUFnRDtBQUVoRCxNQUFNLElBQUksR0FBRztJQUNULElBQUksVUFBVSxHQUFHLEVBQUUsQ0FBQTtJQUNuQixJQUFJLFNBQVMsR0FBRyxFQUFFLENBQUE7SUFDbEIsSUFBSSxTQUFTLEdBQUcsRUFBRSxDQUFBO0lBQ2xCLElBQUksUUFBUSxHQUFHLEVBQUUsQ0FBQTtJQUVqQixLQUFJLElBQUksSUFBSSxJQUFJLElBQUksQ0FBQyxNQUFNLEVBQUU7UUFDekIsSUFBSSxLQUFLLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsQ0FBQztRQUM5QixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFdBQVcsRUFBRTtZQUNsQyx3QkFBYSxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN6QixVQUFVLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQzFCO1FBQ0QsSUFBSSxLQUFLLENBQUMsTUFBTSxDQUFDLElBQUksSUFBSSxVQUFVLEVBQUU7WUFDakMsdUJBQVksQ0FBQyxHQUFHLENBQUMsS0FBSyxDQUFDLENBQUM7WUFDeEIsU0FBUyxDQUFDLElBQUksQ0FBQyxLQUFLLENBQUMsQ0FBQztTQUN6QjtRQUNELElBQUksS0FBSyxDQUFDLE1BQU0sQ0FBQyxJQUFJLElBQUksVUFBVSxFQUFFO1lBQ2pDLHVCQUFZLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3hCLFNBQVMsQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7U0FDekI7UUFDRCxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsSUFBSSxJQUFJLFNBQVMsRUFBRTtZQUNoQyxzQkFBVyxDQUFDLEdBQUcsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUN2QixRQUFRLENBQUMsSUFBSSxDQUFDLEtBQUssQ0FBQyxDQUFDO1NBQ3hCO0tBQ0o7SUFFRCwwQkFBZSxDQUFDLEtBQUssQ0FBQyxVQUFVLEVBQUUsUUFBUSxFQUFFLFNBQVMsRUFBRSxTQUFTLENBQUMsQ0FBQztBQUV0RSxDQUFDLENBQUE7QUFFRCxrQkFBZSxJQUFJLENBQUEifQ==