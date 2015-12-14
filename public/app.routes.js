(function() {
  "use strict";

  angular
    .module("localCityApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider"];
    $stateProvider
      .state("homePage", {
        templateUrl: "/templates/home.html",
        controller
      })


})
