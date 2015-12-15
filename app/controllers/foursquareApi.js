var rp = require('request-promise');

var env = require('../config/environment');


var baseUri = 'https://api.foursquare.com/v2/venues/'

var clientIdParam     = "?client_id="     + env.FOURSQUARE_CLIENT_ID;
var clientSecretParam = "&client_secret=" + env.FOURSQUARE_CLIENT_SECRET;

var authParams = clientIdParam + clientSecretParam + "&v=20151001"



module.exports = {
  venuesSearch: venuesSearch
};

function venuesSearch(req, res) {

  // send an authenticated request to the 4square api,
  // and return it's values...
  var uri = baseUri + '/search' + authParams;

  if (req.query.near)
    uri += "&near=" + encodeURIComponent(req.query.near);

  if (req.query.query)
    uri += "&query=" + encodeURIComponent(req.query.query);

  console.log("Foursquare API Request:", uri);

  rp.get({uri: uri, json: true})
    .then(function(body) {
      res.json({ venues: body.response.venues });
    })
    .catch(function(err) {
      res.json({ error: err.error.meta });
    });
}
