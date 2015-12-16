var express = require('express');
var router = express.Router();
var studentsCtrl = require('../controllers/users');
var factsCtrl = require('../controllers/venues');

module.exports = function(app, passport) {
  // The root route renders our only view
  app.get('/', function(req, res) {
    res.render('index', { user: req.user });
  });

  app.get('/auth/google', passport.authenticate(
    'google',
    { scope: ['profile', 'email'] }
  ));

  app.get('/oauth2callback', passport.authenticate(
    'google',
    {
      successRedirect: '/',
      failureRedirect: '/'
    }
  ));

  app.get('/logout', function(req, res){
    req.logout();
    res.redirect('/');
  });

  //  -------------------------------------------------------
  //  ReSTful routes for: students:
  //
  //    GET: Returns all students.
  //    POST: Not needed / new students will be created when
  //          they authenticate via OAuth for the first time.
  //    PUT & DELETE: Not used in this app.
  //  -------------------------------------------------------

  // GET /api/students
  router.get('/venues', venuesCtrl.all);


  //  -------------------------------------------------------
  //  ReSTful routes for: facts:
  //
  //    Despite the fact that we don't have a 'facts' collection,
  //    we still need routes that map to their creation and
  //    removal. This is similar to the way we had to create
  //    routes for sessions we saw in Rails-land.
  //
  //    GET: Not needed / facts are fetched with each student
  //    POST: Creates a new fact for the currently
  //          authenticated student.
  //    DELETE: Deletes the fact with the :id param.
  //    PUT: Not used in this app.
  //  -------------------------------------------------------

  // POST /api/facts
  router.post('/venues', isLoggedIn, venuesCtrl.create);

  // DELETE /api/facts/:id
  router.delete('/venues/:venueid', venuesCtrl.delete);


  // Mount the api router to the
  // express app (passed in as argument to the module)
  app.use('/api', router);

}

function isLoggedIn(req, res, next) {
  if ( req.isAuthenticated() ) return next();
  res.redirect('/auth/google');
}
