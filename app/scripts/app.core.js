'use strict';

(function() {
  angular.module('movieApp.core', ['ngRoute']) //bower install angular-route --save
         .config(function($routeProvider) {
           $routeProvider.when('/home', {
             templateUrl: 'views/home.html',
             controller: 'movieController',
             controllerAs: 'movieController'
           });
           $routeProvider.when('/movies', {
             templateUrl: 'views/movies.html',
             controller: 'searchController',
             controllerAs: 'searchController'
           });
           $routeProvider.when('/collection', {
             templateUrl: 'views/collection.html',
             controller: 'movieController',
             controllerAs: 'movieController'
           });
           $routeProvider.otherwise( {
             redirectTo: '/home'
              //or templateUrl: ''
           });

         });

})();
