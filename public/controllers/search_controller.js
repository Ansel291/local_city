(function() {
  "use strict";

  angular
    .module("localCityApp")
    .controller("SearchController", SearchController);

  SearchController.$inject = ["$log", "$http"];

  function SearchController($log, $http) {
    var vm = this;

    vm.city  = "";
    vm.query = "";

    vm.search = function() {
      var queryUri = "http://localhost:3000/api/venues?near=" + vm.city + "&query=" + vm.query;

      $log.log("Sending request for", vm.query, "in", vm.city, "…");
      $log.log(queryUri);

      $http({
        method: "GET",
        url:    queryUri
      }).then(function(response) {
        $log.log(response.data.venues);
      }).catch(function(err) {
        $log.log(err);
      });
    };

  }

})();

