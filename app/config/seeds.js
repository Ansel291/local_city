var mongoose = require('./database');

var Venue = require('../models/venue');

var venues = [

];

Venue.remove({}, function(err) {
  if (err) console.log(err);
  Venue.create(venues, function(err, venues) {
    if (err) {
      console.log(err);
    } else {
      console.log("Database seeded with " + venues.length + " venues.");
      mongoose.disconnect();
    }
  });
});

