var roleHarvester = {

    /** @param {Creep} creep **/
    run: function(creep) {
	    if(creep.carry.energy < creep.carryCapacity) {
            var sources = creep.room.find(FIND_SOURCES_ACTIVE);
            if(creep.memory.source == 'source1' && creep.harvest(sources[1]) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[1], {visualizePathStyle: {stroke: '#ffffff'}});
            } else if(creep.memory.source == 'source2' && creep.harvest(sources[0]) == ERR_NOT_IN_RANGE){
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        else if(Game.spawns['Home'].energy < Game.spawns['Home'].energyCapacity) {
            if(creep.transfer(Game.spawns['Home'], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(Game.spawns['Home'], {visualizePathStyle: {stroke: '#ffffff'}});
            }
        }
        
        else {
            var targets = creep.room.find(FIND_STRUCTURES, {
                    filter: (structure) => {
                        return (structure.structureType == STRUCTURE_EXTENSION || structure.structureType == STRUCTURE_SPAWN) &&
                            structure.energy < structure.energyCapacity;
                    }
            });
            if(targets.length > 0) {
                if(creep.transfer(targets[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                    creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
                }
            }
        }
        
        //If capacity is full then build
        // if (Game.spawns['Home'].energy == Game.spawns['Home'].energyCapacity) {
        //     creep.say('Energy full');
        //     var targets = creep.room.find(FIND_CONSTRUCTION_SITES);
        //     if(targets.length) {
        //         if(creep.build(targets[0]) == ERR_NOT_IN_RANGE) {
        //             creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
        //         }
        //     }
        // }
	}
};

module.exports = roleHarvester;