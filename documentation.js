/*

Spawn a harvester
Game.spawns['Home'].spawnCreep([WORK, CARRY, MOVE], 'Harvester1', {memory: {role: 'harvester'} });

Spawn a builder
Game.spawns['Home'].spawnCreep([WORK, CARRY, MOVE], 'Builder1', {memory: {role: 'builder'} });

Spawn an upgrader
Game.spawns['Home'].spawnCreep([WORK, CARRY, MOVE], 'Upgrader1', {memory: {role: 'upgrader'} });

//spawn a big harvester
Game.spawns['Home'].spawnCreep( [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE],
    'HarvesterBig',
    { memory: { role: 'harvester' } } );

construct a tower
Game.spawns['Spawn1'].room.createConstructionSite( 23, 22, STRUCTURE_TOWER );

View Energy
Game.spawns['Home'].energy

get controller level
Game.rooms['W47N15'].controller.level


 */

