(function() {
  "use strict";

  angular.module('localCityApp')
    .factory('venuesDataService', ['$http', function($http) {
        return {
            getVenues: function(search) {
                return $http.get('/api/venues?' + search);
            }
        }
    }]);

})();
