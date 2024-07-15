!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.AlexDovzhanynScreeps=r():e.AlexDovzhanynScreeps=r()}(this,(()=>(()=>{"use strict";var e={94:function(e,r,t){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const o=a(t(432)),n=a(t(306)),s=a(t(711)),i=a(t(613)),l=a(t(152)),p=t(883);r.default=()=>{const e={[p.Role.Harvester]:[],[p.Role.Upgrader]:[],[p.Role.Defender]:[],[p.Role.Builder]:[]},r={harvester:o.default,upgrader:n.default,defender:s.default,builder:i.default};Object.values(Game.creeps).forEach((t=>{e[t.memory.role].push(t),r[t.memory.role].run(t)})),l.default.spawn(e)}},722:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.attackHostileCreeps=r.repairWalls=r.buildClosestContructionSite=r.depositInNearestEnergyContainer=r.repairNearbyStructures=r.harvestNearestSource=void 0,r.harvestNearestSource=e=>{e.say("Harvesting");const r=e.pos.findClosestByPath(FIND_SOURCES);e.harvest(r)==ERR_NOT_IN_RANGE&&e.moveTo(r,{maxRooms:1})},r.repairNearbyStructures=e=>{const r=e.pos.findClosestByPath(FIND_MY_STRUCTURES,{filter:({hits:e,hitsMax:r})=>e<r});r&&(e.say("Repairing"),e.repair(r)==ERR_NOT_IN_RANGE&&e.moveTo(r,{maxRooms:1}))},r.depositInNearestEnergyContainer=e=>{const r=e.pos.findClosestByPath(FIND_STRUCTURES,{filter:e=>(e.structureType===STRUCTURE_EXTENSION||e.structureType===STRUCTURE_SPAWN)&&e.energy<e.energyCapacity});r?(e.say("Depositing"),e.transfer(r,RESOURCE_ENERGY)===ERR_NOT_IN_RANGE&&e.moveTo(r)):e.say("No available container for deposit")},r.buildClosestContructionSite=e=>{const r=e.pos.findClosestByPath(FIND_CONSTRUCTION_SITES);r&&(e.say("Building"),e.build(r)==ERR_NOT_IN_RANGE&&e.moveTo(r))},r.repairWalls=e=>{const r=e.pos.findClosestByPath(FIND_STRUCTURES,{filter:({hits:e,hitsMax:r,structureType:t})=>t==STRUCTURE_WALL&&e<r});r&&(e.say("Repairing walls"),e.repair(r[0])==ERR_NOT_IN_RANGE&&e.moveTo(r[0],{maxRooms:1}))},r.attackHostileCreeps=e=>{e.say("Attacking!");const r=e.pos.findClosestByPath(FIND_HOSTILE_CREEPS);e.attack(r)==ERR_NOT_IN_RANGE&&e.moveTo(r)}},613:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.getBlueprintForSpawnStrategy=void 0;const a=t(883),o=t(722),n=t(101),s={bodyParts:[WORK,CARRY,CARRY,MOVE,MOVE],name:"Builder",defaultMemory:{role:a.Role.Builder}};r.getBlueprintForSpawnStrategy=e=>({[n.SpawnStrategy.Tier1]:s,[n.SpawnStrategy.Tier2]:Object.assign(Object.assign({},s),{bodyParts:[...s.bodyParts,WORK,MOVE]})}[e]),r.default={run:function(e){e.memory.building&&0==e.carry.energy&&(e.memory.building=!1),e.memory.building||e.carry.energy!=e.carryCapacity||(e.memory.building=!0),e.memory.building?((0,o.repairNearbyStructures)(e),(0,o.buildClosestContructionSite)(e),(0,o.repairWalls)(e)):((0,o.harvestNearestSource)(e),e.carry.energy==e.carryCapacity&&(0,o.depositInNearestEnergyContainer)(e))}}},711:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.getBlueprintForSpawnStrategy=void 0;const a=t(883),o=t(722),n=t(101),s={bodyParts:[WORK,CARRY,ATTACK,MOVE],name:"Defender",defaultMemory:{role:a.Role.Defender}};r.getBlueprintForSpawnStrategy=e=>({[n.SpawnStrategy.Tier1]:s,[n.SpawnStrategy.Tier2]:Object.assign(Object.assign({},s),{bodyParts:[...s.bodyParts,ATTACK,MOVE]})}[e]),r.default={run:function(e){e.room.find(FIND_HOSTILE_CREEPS).length>0&&e.carry.energy>e.carryCapacity/5?(0,o.attackHostileCreeps)(e):0==e.room.find(FIND_HOSTILE_CREEPS).length&&1==e.memory.canUpgrade?(e.upgradeController(e.room.controller)==ERR_NOT_IN_RANGE&&e.memory.canUpgrade&&e.moveTo(e.room.controller),e.carry.energy<1&&(e.memory.canUpgrade=!1)):((0,o.harvestNearestSource)(e),e.carry.energy==e.carryCapacity&&(e.say("Upgrading"),e.memory.canUpgrade=!0))}}},432:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.getBlueprintForSpawnStrategy=void 0;const a=t(883),o=t(722),n=t(101),s={bodyParts:[WORK,WORK,CARRY,MOVE],name:"Harvester",defaultMemory:{role:a.Role.Harvester}};r.getBlueprintForSpawnStrategy=e=>({[n.SpawnStrategy.Tier1]:s,[n.SpawnStrategy.Tier2]:Object.assign(Object.assign({},s),{bodyParts:[...s.bodyParts,WORK,MOVE]})}[e]),r.default={run:function(e){e.carry.energy<e.carryCapacity?(0,o.harvestNearestSource)(e):(0,o.depositInNearestEnergyContainer)(e)}}},306:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.getBlueprintForSpawnStrategy=void 0;const a=t(883),o=t(722),n=t(101),s={bodyParts:[WORK,CARRY,CARRY,MOVE,MOVE],name:"Upgrader",defaultMemory:{role:a.Role.Upgrader}};r.getBlueprintForSpawnStrategy=e=>({[n.SpawnStrategy.Tier1]:s,[n.SpawnStrategy.Tier2]:Object.assign(Object.assign({},s),{bodyParts:[...s.bodyParts,WORK,MOVE]})}[e]),r.default={run:function(e){e.memory.upgrading&&0==e.carry.energy&&(e.memory.upgrading=!1,e.say("harvesting")),e.memory.upgrading||e.carry.energy!=e.carryCapacity||(e.memory.upgrading=!0,e.say("upgrading")),e.memory.upgrading?e.upgradeController(e.room.controller)==ERR_NOT_IN_RANGE&&e.moveTo(e.room.controller):(0,o.harvestNearestSource)(e)}}},152:(e,r,t)=>{Object.defineProperty(r,"__esModule",{value:!0});const a=t(432),o=t(613),n=t(711),s=t(306),i=t(883),l=t(101),p={[i.Role.Harvester]:a.getBlueprintForSpawnStrategy,[i.Role.Builder]:o.getBlueprintForSpawnStrategy,[i.Role.Defender]:n.getBlueprintForSpawnStrategy,[i.Role.Upgrader]:s.getBlueprintForSpawnStrategy},u=[i.Role.Harvester,i.Role.Builder,i.Role.Upgrader,i.Role.Defender],d=(e,r)=>{const{bodyParts:t,name:a,defaultMemory:o}=p[e](r),n=Game.spawns.Spawn1.room.find(FIND_MY_STRUCTURES,{filter:{structureType:STRUCTURE_EXTENSION}});n.push(Game.spawns.Spawn1);const s={memory:o,energyStructures:n};if(Game.spawns.Spawn1.spawnCreep(t,a+Math.floor(100*Math.random()),Object.assign(Object.assign({},s),{dryRun:!0}))!=OK)return;const i=Game.spawns.Spawn1.spawnCreep(t,a+Math.floor(100*Math.random()),s);i!=OK&&console.log(`Couldn't spawn creep: ${i}`)},y=e=>{const r={harvester:3,builder:2,defender:2,upgrader:2};let t=!0;for(const a of u)if(e[a].length<r[a])return t=!1,d(a,l.SpawnStrategy.Tier1);t&&d(i.Role.Builder,l.SpawnStrategy.Tier1)},c={[l.SpawnStrategy.Tier1]:y,[l.SpawnStrategy.Tier2]:e=>{const r={harvester:5,builder:3,defender:3,upgrader:3};let t=!0;for(const a of u)if(e[a].length<r[a])return t=!1,d(a,l.SpawnStrategy.Tier2);t&&d(i.Role.Builder,l.SpawnStrategy.Tier2)}};r.default={spawn:e=>{if(Game.spawns.Spawn1.spawning)return;if(Object.keys(Game.creeps).length<3)return y(e);let r=Game.spawns.Spawn1.room.controller.level,t=c[r];for(;!t;){if(r--,0==r){t=y;break}t=c[r]}t(e)}}},927:function(e,r,t){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.loop=void 0;var o=t(94);Object.defineProperty(r,"loop",{enumerable:!0,get:function(){return a(o).default}})},883:(e,r)=>{var t;Object.defineProperty(r,"__esModule",{value:!0}),r.Role=void 0,(t=r.Role||(r.Role={})).Harvester="harvester",t.Builder="builder",t.Upgrader="upgrader",t.Defender="defender"},101:(e,r)=>{var t;Object.defineProperty(r,"__esModule",{value:!0}),r.SpawnStrategy=void 0,(t=r.SpawnStrategy||(r.SpawnStrategy={}))[t.Tier1=0]="Tier1",t[t.Tier2=1]="Tier2",t[t.Tier3=2]="Tier3"}},r={};return function t(a){var o=r[a];if(void 0!==o)return o.exports;var n=r[a]={exports:{}};return e[a].call(n.exports,n,n.exports,t),n.exports}(927)})()));