(function () {
    'use strict';

    angular.module("productManagement")
        .controller('ProfileEditCtrl',
                   ['gravatarUrlBuilder',
                    ProfileEditCtrl]);
    
    function ProfileEditCtrl(gravatarUrlBuilder) {
        var vm = this;
        vm.user = {};

        vm.getGravatarUrl = function(email) {
            return gravatarUrlBuilder.buildGravatarUrl(email);
        }
    }
}());