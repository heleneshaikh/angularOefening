'use strict';

(function() {

  function MovieController($http, apiUrl) {
    var _this = this;

    _this.movies = [];

    $http.get(apiUrl + '/Movies').success(function(data) {
      _this.movies = data;
    });

    _this.hideAll = function() {
      _this.hide = !_this.hide;
    };
  }

  angular.module('movieApp').controller('movieController', MovieController);



})();
