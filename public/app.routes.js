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
      });

    $urlRouterProvider.otherwise("/");
  }

})();

