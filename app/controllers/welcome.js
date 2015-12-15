var Venue = require('../models/venue');

var index = function(req, res, next) {
  Venue.find({}, function(error, venues) {
    console.log(venues);
    res.render('welcome/index', { user: req.user, venues: venues});
  });
}

module.exports = {
  index: index
};
