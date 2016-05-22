(function () {
	'use strict';
	
	angular.module('common.services')
        .factory('eventData',
        		["$resource", eventData]);

    function eventData($resource){
    	var resource = $resource('/data/event/:id', {id:'@id'}, 
    					{"getAll": {method: "GET", isArray: true, params: {something: "foo"}}});
    	return {
    		getEvent: function(){
    			return resource.get({id:1});
    		},
    		save: function(data){
    			return resource.save(data);
    		},
            getAllEvents: function() {
                return resource.query();
            }
    	};
    	
    }
})();