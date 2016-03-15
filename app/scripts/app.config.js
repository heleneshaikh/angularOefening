'use strict';

(function() {
    angular.module('movieApp.config', [])
    .constant('apiUrl', 'https://angularbackend.azurewebsites.net/swagger/ui/index#/Movies');

})();
