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
          centerMap();
          createVenueMarkers();
        });
    };

    vm.resetSearchField = function() {
      vm.city = '';
      vm.query = '';
      vm.venues = [];
    };

    function centerMap() {
      var latMin, latMax, lngMin, lngMax;
      vm.venues.forEach(function(venue) {
        if (latMin === undefined) {
          latMin = venue.location.lat;
          latMax = venue.location.lat;
          lngMin = venue.location.lng;
          lngMax = venue.location.lng;
        } else {
          latMin = Math.min(venue.location.lat, latMin);
          latMax = Math.max(venue.location.lat, latMax);
          lngMin = Math.min(venue.location.lng, lngMin);
          lngMax = Math.max(venue.location.lng, lngMax);
        }
      });
      map.setCenter(new google.maps.LatLng(
        latMin + (latMax - latMin) / 2,
        lngMin + (lngMax - lngMin) / 2
      ));
      map.setZoom(11);
    };

    function createVenueMarkers() {
      vm.venues.forEach(function(venue) {

        var marker = new google.maps.Marker({
          position: {
            lat: venue.location.lat,
            lng: venue.location.lng
          },
          map: map,
          animation: google.maps.Animation.DROP
        });

        var infowindow = new google.maps.InfoWindow({
           content: venue.name
        });

        marker.addListener('click', function() {
            infowindow.open(map, marker);
        });
      });
    }

  }

})();


