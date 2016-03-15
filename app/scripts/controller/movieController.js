'use strict';

(function() {

  function MovieController($http, apiUrl) {
    var _this = this;

    _this.movies = [

    ];

    $http.get(apiUrl + '/Movies').success(function(data) {
      _this.movies = data;
    });
  }

  angular.module('movieApp').controller('movieController', MovieController);



})();
