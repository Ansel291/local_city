(function() {
  "use strict";

  angular
    .module("localCityApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("home", {
        url: "/home",
        templateUrl: "/templates/home.html"
      })
      .state("signIn", {
        url:"/signIn",
        templateUrl: "/templates/signIn.html"
      })
      .state("homes", {
        url:"/homes",
        templateUrl: "/templates/homes.html"
      });

    $urlRouterProvider.otherwise("/");
  }

})();

