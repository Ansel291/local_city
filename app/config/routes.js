var express = require('express'),
    router  = new express.Router(),
    env     = require('./environment');

// Require controllers.
var foursquareApiController = require('../controllers/foursquareApi');
// var welcomeController = require('../controllers/welcome');
// var venuesController  = require('../controllers/venues');
// var usersController = require('../controllers/users');


module.exports = function(app, passport) {

  function isAuthenticated(req, res, next) {
    // CHECK THE USER STORED IN SESSION FOR A CUSTOM VARIABLE
    if (req.user)
        return next();

    // IF A USER ISN'T LOGGED IN, THEN REDIRECT THEM SOMEWHERE
    res.redirect('/');
}
  // accept any routes that match the given path
  // in part or in whole, and send them to the
  // express.Router that is the second param
  app.use('/', router);


  // // welcome/root path
  // router.get('/', welcomeController.index);

  // router.get('/users/:id', usersController.show);
  // // crawls resources
  // router.get('/venues',     venuesController.index);
  // router.get('/venues/:id', venuesController.show);
  // // router.put('/crawls/:id', crawlsController.update);
  // router.post('/venues', venuesController.create);
  // router.get('/venues/search/:name', venuesController.search);
  // router.delete('/venues/:id', venuesController.destroy);
  // router.put('/venues/:id',    venuesController.update);


//   // fourSquare api implmentation
//   router.get('/venues', isAuthenticated, fourSquareController.index);

  router.get('/api/venues', foursquareApiController.venuesSearch);

  // login/logout "session" routes
  router.get(
    '/auth/google',
    passport.authenticate('google', {scope: ['profile', 'email'] })
  );

  router.get(
    '/oauth2callback',
    passport.authenticate(
      'google',
      {
        successRedirect : '/',
        failureRedirect : '/'
      }
    )
  );

  router.get('/logout', function(req, res) {
    req.logout();
    res.redirect('/');
  });
};

// Insert this middleware for routes that require a logged in user
function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}

