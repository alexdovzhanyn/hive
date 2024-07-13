export default {
  spawn: function(harvesters, builders, upgraders, defenders){
      if(harvesters.length < 3){
          Game.spawns.Spawn1.createCreep([WORK, WORK, CARRY,MOVE], undefined, {role: 'harvester'});
          console.log("Attempting to spawn harvester...");
      }
      else if(builders.length < 2){
          Game.spawns.Spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'builder'});
          console.log("Attempting to spawn builder...");
      }
      else if(defenders.length < 2){
          Game.spawns.Spawn1.createCreep([WORK, CARRY, ATTACK ,MOVE], undefined, {role: 'defender'});
          console.log("Attempting to spawn defender...");
      }
      else if(upgraders.length < 2){
          Game.spawns.Spawn1.createCreep([WORK, CARRY, CARRY, MOVE, MOVE], undefined, {role: 'upgrader'});
          console.log("Attempting to spawn upgrader...");
      }
      
      console.log("------------------------------------------------------------------");
      console.log("Harvesters are: " + harvesters);
      console.log("Upgraders are: " + upgraders);
      console.log("Defenders are: " + defenders);
      console.log("Builders are: " + builders);
      
  }
};