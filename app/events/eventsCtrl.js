(function () {
    'use strict';

    angular.module("productManagement")
        .controller('EventsCtrl',
                    ['eventData',
                    EventsCtrl]);
    
    function EventsCtrl(eventData) {
        var vm = this;

        vm.sortOrder = 'name';
        vm.event = {
            "name": "angular show",
            "id": 1,
            "date": "5/20/1016",
            "time": "10:30 am",
            "location": {
                "address": "Google Headquarters",
                "city": "Mountain View",
                "province": "CA"
            },
            "imageUrl": "http://pascalprecht.github.com/slides/angularjs-insights/img/angularjs-logo.png",
            "sessions": [
                {
                    "id": 1,
                    "name": "Directives Masterclass",
                    "creatorName": "Bob Smith",
                    "duration": 1,
                    "level": "Advanced",
                    "abstract": "In this session you will learn the ins and outs of directives!",
                    "upVoteCount": 0
                },
                {
                    "id": 2,
                    "name": "Scopes for fun and profit",
                    "creatorName": "John Doe",
                    "duration": 3,
                    "level": "Beginner",
                    "abstract": "This session will take a closer look at scopes.  Learn what they do, how they do it, and how to get them to do it for you.",
                    "upVoteCount": 3
                },
                {
                    "id": 3,
                    "name": "Well Behaved Controllers",
                    "creatorName": "Jane Doe",
                    "duration": 2,
                    "level": "Intermediate",
                    "abstract": "Controllers are the beginning of everything Angular does.  Learn how to craft controllers that will win the respect of your friends and neighbors.",
                    "upVoteCount": 0
                }
            ]
        };

        // eventData.getEvent().$promise
        //     .then(
        //         function(events){
        //             vm.event = Events;
        //             console.log(events);
        //         })
        //     .catch(
        //         function(response) {
        //             console.log(response);
        //         })
        // ;

        vm.upVoteSession = function (session) {
            session.upVoteCount++;
        };

        vm.downVoteSession = function (session) {
            session.upVoteCount--;
        };

    }
}());