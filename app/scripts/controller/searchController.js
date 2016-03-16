'use strict';

(function() {
  function SearchController($http, apiUrl) {
    var _this = this;

    _this.movieSelected = [];

    _this.searchMovie = function(title) {
      $http.get(apiUrl + '/Movies/Search/?title=' + title)
      .success(function(data) {
        _this.movieSelected = data;
    });

  };
}

  angular.module('movieApp').controller('searchController', SearchController);


})();
