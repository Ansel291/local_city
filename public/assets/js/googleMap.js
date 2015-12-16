
function initMap() {

  var customMapType = new google.maps.StyledMapType([
      {
        stylers: [
          {hue: '#000000'},
          {visibility: 'simplified'},
          {gamma: .95},
          {weight: .95  }
        ]
      },
      {
        elementType: 'labels',
        stylers: [{visibility: 'off'}]
      },
      {
        featureType: 'water',
        stylers: [{color: '#000000'}]
      },
      {
        featureType: 'landscape',
        stylers: [{color: '#999999'}]
      }
    ], {
      name: 'Custom Style'
  });
  var customMapTypeId = 'custom_style';

  var map = new google.maps.Map(document.getElementById('map'), {
    zoom: 11,
    center: {lat: 34.032032, lng: -118.269870},  // Brooklyn.
    mapTypeControlOptions: {
      mapTypeIds: [google.maps.MapTypeId.ROADMAP, customMapTypeId]
    }
  });
  map.mapTypes.set(customMapTypeId, customMapType);
  map.setMapTypeId(customMapTypeId);

}



// var map;
// function initMap() {
//   var latLng = {
//     lat: 34.032032,
//     lng: -118.269870
//   };

//   map = new google.maps.Map(document.getElementById('map'), {
//     center: latLng,
//     zoom: 14
//   });

//   var marker = new google.maps.Marker({
//     position: latLng,
//     map: map,
//     title: "my fat ass"
//   });
// }

// var featureOpts = [
// ]




