var roleRepairer = {

    /** @param {Creep} creep **/
    run: function(creep) {

	    if(creep.memory.repairer && creep.carry.energy == 0) {
            creep.memory.repairer = false;
            creep.say('🔄 harvest');
	    }
	    if(!creep.memory.repairer && creep.carry.energy == creep.carryCapacity) {
	        creep.memory.repairer = true;
	        creep.say('🚧 repair');
	    }

	    if(creep.memory.repairer) {

			var targets = creep.room.find(FIND_STRUCTURES, {
				filter: object => object.hits < object.hitsMax
			});

			targets.sort((a,b) => a.hits - b.hits);

			if(targets.length > 0) {
				if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
					creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
				}

	        // var targets = creep.room.find(FIND_STRUCTURES);
            // if(targets.length) {
            //     if(creep.repair(targets[0]) == ERR_NOT_IN_RANGE) {
            //         creep.moveTo(targets[0], {visualizePathStyle: {stroke: '#ffffff'}});
            //    }
            }
	    }
	    else {
	        var sources = creep.room.find(FIND_MY_SPAWNS);
            if(creep.withdraw(sources[0], RESOURCE_ENERGY) == ERR_NOT_IN_RANGE) {
                creep.moveTo(sources[0], {visualizePathStyle: {stroke: '#ffaa00'}});
            }
	    }
	}
};

module.exports = roleRepairer;