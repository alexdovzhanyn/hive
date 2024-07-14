!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.AlexDovzhanynScreeps=r():e.AlexDovzhanynScreeps=r()}(this,(()=>(()=>{"use strict";var e={94:function(e,r,o){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0});const t=a(o(432)),n=a(o(306)),l=a(o(711)),u=a(o(613)),s=a(o(152)),d=o(883);r.default=()=>{const e={[d.Role.Harvester]:[],[d.Role.Upgrader]:[],[d.Role.Defender]:[],[d.Role.Builder]:[]},r={harvester:t.default,upgrader:n.default,defender:l.default,builder:u.default};Object.values(Game.creeps).forEach((o=>{e[o.memory.role].push(o),r[o.memory.role].run(o)})),s.default.spawn(e)}},722:(e,r)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.repairNearbyStructures=r.harvestNearestSource=void 0,r.harvestNearestSource=e=>{const r=e.pos.findClosestByPath(FIND_SOURCES);e.harvest(r)==ERR_NOT_IN_RANGE&&e.moveTo(r,{maxRooms:1})},r.repairNearbyStructures=e=>{const r=e.pos.findInRange(FIND_MY_STRUCTURES,25).filter((e=>e.hits<e.hitsMax));r&&e.repair(r[0])==ERR_NOT_IN_RANGE&&e.moveTo(r[0],{maxRooms:1})}},613:(e,r,o)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.spawnBluePrint=void 0;const a=o(883),t=o(722);r.spawnBluePrint={bodyParts:[WORK,CARRY,CARRY,MOVE,MOVE],name:"Builder",defaultMemory:{role:a.Role.Builder}},r.default={run:function(e){if(e.memory.building&&0==e.carry.energy&&(e.memory.building=!1,e.say("harvesting")),e.memory.building||e.carry.energy!=e.carryCapacity||(e.memory.building=!0,e.say("building")),e.memory.building){(0,t.repairNearbyStructures)(e);var r=e.room.find(FIND_CONSTRUCTION_SITES);r.length&&e.build(r[0])==ERR_NOT_IN_RANGE&&e.moveTo(r[0])}else(0,t.harvestNearestSource)(e)}}},711:(e,r,o)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.spawnBluePrint=void 0;const a=o(883),t=o(722);r.spawnBluePrint={bodyParts:[WORK,CARRY,ATTACK,MOVE],name:"Defender",defaultMemory:{role:a.Role.Defender}},r.default={run:function(e){if(e.room.find(FIND_HOSTILE_CREEPS).length>0&&e.carry.energy>e.carryCapacity/5){e.say("attacking");var r=e.pos.findClosestByPath(FIND_HOSTILE_CREEPS);e.attack(r)==ERR_NOT_IN_RANGE&&e.moveTo(r)}else 0==e.room.find(FIND_HOSTILE_CREEPS).length&&1==e.memory.canUpgrade?(e.upgradeController(e.room.controller)==ERR_NOT_IN_RANGE&&e.memory.canUpgrade&&e.moveTo(e.room.controller),e.carry.energy<1&&(e.say("harvesting"),e.memory.canUpgrade=!1)):((0,t.harvestNearestSource)(e),e.carry.energy==e.carryCapacity&&(e.say("upgrading"),e.memory.canUpgrade=!0))}}},432:(e,r,o)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.spawnBluePrint=void 0;const a=o(883),t=o(722);r.spawnBluePrint={bodyParts:[WORK,WORK,CARRY,MOVE],name:"Harvester",defaultMemory:{role:a.Role.Harvester}},r.default={run:function(e){if(e.carry.energy<e.carryCapacity)(0,t.harvestNearestSource)(e);else{const r=e.room.find(FIND_STRUCTURES,{filter:e=>(e.structureType===STRUCTURE_EXTENSION||e.structureType===STRUCTURE_SPAWN)&&e.energy<e.energyCapacity});r.length>0&&e.transfer(r[0],RESOURCE_ENERGY)===ERR_NOT_IN_RANGE&&e.moveTo(r[0])}}}},306:(e,r,o)=>{Object.defineProperty(r,"__esModule",{value:!0}),r.spawnBluePrint=void 0;const a=o(883),t=o(722);r.spawnBluePrint={bodyParts:[WORK,CARRY,CARRY,MOVE,MOVE],name:"Upgrader",defaultMemory:{role:a.Role.Upgrader}},r.default={run:function(e){e.memory.upgrading&&0==e.carry.energy&&(e.memory.upgrading=!1,e.say("harvesting")),e.memory.upgrading||e.carry.energy!=e.carryCapacity||(e.memory.upgrading=!0,e.say("upgrading")),e.memory.upgrading?e.upgradeController(e.room.controller)==ERR_NOT_IN_RANGE&&e.moveTo(e.room.controller):(0,t.harvestNearestSource)(e)}}},152:(e,r,o)=>{Object.defineProperty(r,"__esModule",{value:!0});const a=o(432),t=o(613),n=o(711),l=o(306),u=o(883),s={[u.Role.Harvester]:a.spawnBluePrint,[u.Role.Builder]:t.spawnBluePrint,[u.Role.Defender]:n.spawnBluePrint,[u.Role.Upgrader]:l.spawnBluePrint},d={harvester:3,builder:2,defender:2,upgrader:2},i=[u.Role.Harvester,u.Role.Builder,u.Role.Upgrader,u.Role.Defender];r.default={spawn:e=>{if(!Game.spawns.Spawn1.spawning)for(const r of i)if(e[r].length<d[r]){const{bodyParts:o,name:a,defaultMemory:t}=s[r],n=o.reduce(((e,r)=>e+BODYPART_COST[r]),0);if(Game.spawns.Spawn1.store[RESOURCE_ENERGY]<n)return;console.log(`Total ${r}s: ${e[r].length}, need ${d[r]}. Spawning new ${r}...`);const l=Game.spawns.Spawn1.spawnCreep(o,a+Math.floor(100*Math.random()),{memory:t});return void console.log(l)}}}},927:function(e,r,o){var a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(r,"__esModule",{value:!0}),r.loop=void 0;var t=o(94);Object.defineProperty(r,"loop",{enumerable:!0,get:function(){return a(t).default}})},883:(e,r)=>{var o;Object.defineProperty(r,"__esModule",{value:!0}),r.Role=void 0,(o=r.Role||(r.Role={})).Harvester="harvester",o.Builder="builder",o.Upgrader="upgrader",o.Defender="defender"}},r={};return function o(a){var t=r[a];if(void 0!==t)return t.exports;var n=r[a]={exports:{}};return e[a].call(n.exports,n,n.exports,o),n.exports}(927)})()));