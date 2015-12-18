(function() {
  "use strict";

  angular
    .module("localCityApp")
    .config(AppRoutes);

  AppRoutes.$inject = ["$stateProvider", "$urlRouterProvider"];

  function AppRoutes($stateProvider, $urlRouterProvider) {
    $stateProvider
      .state("search", {
        url: "/search",
        templateUrl: "/templates/search.html"
      })
      .state("logIn", {
        url:"/logIn",
        templateUrl: "/templates/logIn.html"
      })
      .state("home", {
        url:"/home",
        templateUrl: "/templates/home.html"
      });

    $urlRouterProvider.otherwise("/");
  }

})();

