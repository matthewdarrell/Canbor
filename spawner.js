var spawnCreeps = {

    /** @param {Creep} creep **/
    run: function() {

        var harvesterNumber = 3;
        var builderNumber = 1;
        var upgraderNumber = 2;
        var repairersNumber = 1;
        var bigHarvesterNumber = 2;

        var tier1 = [WORK,CARRY,MOVE];
        var tier2 = [WORK,WORK,WORK,WORK,CARRY,MOVE,MOVE];

        //Harvester spawning
        var harvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'harvester');
        var sourceHarvesters = _.filter(Game.creeps, (creep) => creep.memory.source == 'source2');
        var bigHarvesters = _.filter(Game.creeps, (creep) => creep.memory.role == 'BigHarvester');
    
        if(harvesters.length < harvesterNumber && sourceHarvesters.length < 3 && bigHarvesters.length >= bigHarvesterNumber) {
            var newName = 'Harvester' + Game.time;
            Game.spawns['Home'].spawnCreep(tier1, newName, 
                {memory: {role: 'harvester', source: 'source2'}});        
        } else if (harvesters.length < harvesterNumber){
            var newName = 'Harvester' + Game.time;
            Game.spawns['Home'].spawnCreep(tier1, newName, 
                {memory: {role: 'harvester', source: 'source1'}});
        }
    
        if(Game.spawns['Home'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['Home'].spawning.name];
            Game.spawns['Home'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Home'].pos.x + 1, 
                Game.spawns['Home'].pos.y, 
            {align: 'left', opacity: 0.8});
        }

        //BIG Harvester spawning
        if(harvesters.length >= harvesterNumber && sourceHarvesters.length == 3 && bigHarvesters.length < bigHarvesterNumber) {
            var newName = 'BIGHarvester' + Game.time;
            Game.spawns['Home'].spawnCreep(tier2, newName,
                { memory: { role: 'BigHarvester', source: 'source2' }});        
        } else if (harvesters.length >= harvesterNumber && bigHarvesters.length < bigHarvesterNumber){
            var newName = 'BigHarvester' + Game.time;
            Game.spawns['Home'].spawnCreep(tier2, newName, 
                {memory: {role: 'BigHarvester', source: 'source1'}});
        }
    
        if(Game.spawns['Home'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['Home'].spawning.name];
            Game.spawns['Home'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Home'].pos.x + 1, 
                Game.spawns['Home'].pos.y, 
            {align: 'left', opacity: 0.8});
        }

        //Builder spawner
        var builders = _.filter(Game.creeps, (creep) => creep.memory.role == 'builder');
    
        if(builders.length < builderNumber && harvesters.length >= harvesterNumber) {
            var newName = 'Builder' + Game.time;
            Game.spawns['Home'].spawnCreep([WORK,CARRY,MOVE], newName, 
                {memory: {role: 'builder'}});        
        }
    
        if(Game.spawns['Home'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['Home'].spawning.name];
            Game.spawns['Home'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Home'].pos.x + 1, 
                Game.spawns['Home'].pos.y, 
            {align: 'left', opacity: 0.8});
        }

        //Upgrader spawner
        var upgraders = _.filter(Game.creeps, (creep) => creep.memory.role == 'upgrader');
    
        if(upgraders.length < upgraderNumber && harvesters.length >= harvesterNumber && builders.length >= builderNumber) {
            var newName = 'Upgrader' + Game.time;
            Game.spawns['Home'].spawnCreep(tier1, newName, 
                {memory: {role: 'upgrader'}});        
        }
    
        if(Game.spawns['Home'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['Home'].spawning.name];
            Game.spawns['Home'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Home'].pos.x + 1, 
                Game.spawns['Home'].pos.y, 
                {align: 'left', opacity: 0.8});
        }

        //Repairer spawner
        var repairers = _.filter(Game.creeps, (creep) => creep.memory.role == 'repairer');
    
        if(repairers.length < repairersNumber && harvesters.length >= harvesterNumber) {
            var newName = 'Repairer' + Game.time;
            Game.spawns['Home'].spawnCreep(tier1, newName, 
                {memory: {role: 'repairer'}});        
        }
    
        if(Game.spawns['Home'].spawning) { 
            var spawningCreep = Game.creeps[Game.spawns['Home'].spawning.name];
            Game.spawns['Home'].room.visual.text(
                '🛠️' + spawningCreep.memory.role,
                Game.spawns['Home'].pos.x + 1, 
                Game.spawns['Home'].pos.y, 
            {align: 'left', opacity: 0.8});
        }
    }
}

module.exports = spawnCreeps;