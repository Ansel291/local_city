(function() {
  "use strict";

  angular
    .module("localCityApp")
    .controller("MainController", MainController);

  MainController.$inject = ["$state", "$log", "venuesDataService"];

  function MainController($state, $log, venuesDataService) {
    var vm = this;
    vm.venues = [];

    vm.search = function() {
      venuesDataService.getVenues(encodeURI('near=' + vm.city + '&query=' + vm.query))
        .then(function(res) {
          vm.venues = res.data.venues;
        });
    };

  }

})();


