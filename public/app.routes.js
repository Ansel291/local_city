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
      });

    $urlRouterProvider.otherwise("/");
  }

})();

