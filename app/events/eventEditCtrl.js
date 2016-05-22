(function () {
    'use strict';

    angular.module("productManagement")
        .controller('EventEditCtrl',
                    ['$state',
                    EventEditCtrl]);
    
    function EventEditCtrl($state) {
        var vm = this;
        vm.event = {};

        vm.cancelEvent = function() {
            $state.go('eventsApp');
        };

        vm.saveEvent = function(event, newEventForm) {
            // if(newEventForm.$valid) {
            //     eventData.save(event)
            //         .$promise
            //         .then(function(response) { console.log('success', response)})
            //         .catch(function(response) { console.log('failure', response)});
            // }
            if (newEventForm.$valid){
                window.alert('event ' + event.name+ ' saved');
            }
        };

    }
}());