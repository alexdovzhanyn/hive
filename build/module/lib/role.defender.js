export default {
    /** @param {Creep} creep **/
    run: function (creep) {
        if (creep.room.find(FIND_HOSTILE_CREEPS).length > 0 && creep.carry.energy > creep.carryCapacity / 5) {
            creep.say("attacking");
            var nearestEnemy = creep.pos.findClosestByPath(FIND_HOSTILE_CREEPS);
            if (creep.attack(nearestEnemy) == ERR_NOT_IN_RANGE) {
                creep.moveTo(nearestEnemy);
            }
        }
        else if (creep.room.find(FIND_HOSTILE_CREEPS).length == 0 && creep.memory.canUpgrade == true) {
            if (creep.upgradeController(creep.room.controller) == ERR_NOT_IN_RANGE && creep.memory.canUpgrade) {
                creep.moveTo(creep.room.controller);
            }
            if (creep.carry.energy < 1) {
                creep.say("harvesting");
                creep.memory.canUpgrade = false;
            }
        }
        else {
            var nearestSource = creep.pos.findClosestByPath(FIND_SOURCES);
            if (creep.harvest(nearestSource) == ERR_NOT_IN_RANGE) {
                creep.moveTo(nearestSource);
            }
            if (creep.carry.energy == creep.carryCapacity) {
                creep.say("upgrading");
                creep.memory.canUpgrade = true;
            }
        }
    }
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicm9sZS5kZWZlbmRlci5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uLy4uLy4uL3NyYy9saWIvcm9sZS5kZWZlbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxlQUFlO0lBRWIsNEJBQTRCO0lBQzVCLEdBQUcsRUFBRSxVQUFTLEtBQUs7UUFDZixJQUFJLEtBQUssQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLG1CQUFtQixDQUFDLENBQUMsTUFBTSxHQUFHLENBQUMsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUMsYUFBYSxHQUFHLENBQUMsRUFBRTtZQUNqRyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFBO1lBQ3RCLElBQUksWUFBWSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsbUJBQW1CLENBQUMsQ0FBQztZQUNwRSxJQUFHLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLElBQUksZ0JBQWdCLEVBQUU7Z0JBQy9DLEtBQUssQ0FBQyxNQUFNLENBQUMsWUFBWSxDQUFDLENBQUM7YUFDOUI7U0FDSjthQUNJLElBQUksS0FBSyxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsbUJBQW1CLENBQUMsQ0FBQyxNQUFNLElBQUksQ0FBQyxJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxJQUFJLElBQUksRUFBRTtZQUMxRixJQUFHLEtBQUssQ0FBQyxpQkFBaUIsQ0FBQyxLQUFLLENBQUMsSUFBSSxDQUFDLFVBQVUsQ0FBQyxJQUFJLGdCQUFnQixJQUFJLEtBQUssQ0FBQyxNQUFNLENBQUMsVUFBVSxFQUFFO2dCQUM5RixLQUFLLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLENBQUM7YUFDdkM7WUFDRCxJQUFJLEtBQUssQ0FBQyxLQUFLLENBQUMsTUFBTSxHQUFHLENBQUMsRUFBRTtnQkFDeEIsS0FBSyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsQ0FBQztnQkFDeEIsS0FBSyxDQUFDLE1BQU0sQ0FBQyxVQUFVLEdBQUcsS0FBSyxDQUFDO2FBQ25DO1NBQ0o7YUFDSTtZQUNELElBQUksYUFBYSxHQUFHLEtBQUssQ0FBQyxHQUFHLENBQUMsaUJBQWlCLENBQUMsWUFBWSxDQUFDLENBQUM7WUFDOUQsSUFBRyxLQUFLLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLGdCQUFnQixFQUFFO2dCQUNqRCxLQUFLLENBQUMsTUFBTSxDQUFDLGFBQWEsQ0FBQyxDQUFDO2FBQy9CO1lBQ0QsSUFBSSxLQUFLLENBQUMsS0FBSyxDQUFDLE1BQU0sSUFBSSxLQUFLLENBQUMsYUFBYSxFQUFFO2dCQUMzQyxLQUFLLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO2dCQUN2QixLQUFLLENBQUMsTUFBTSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUE7YUFDakM7U0FDSjtJQUNMLENBQUM7Q0FDRixDQUFDIn0=