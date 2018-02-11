var express = require('express');
var router = express.Router();

var passport = require('passport');

var tests = require('./testsRoutes');
var results = require('./resultsRoutes');
var questions = require('./questionsRoutes');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome!', index: true });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign up', index: true, message: req.flash('signupMessage') });
});

router.post('/signup', passport.authenticate('local-signup', {
  successRedirect : '/home',
  failureRedirect : '/signup',
  failureFlash : true
}));

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Log in', index: true, message: req.flash('loginMessage') });
});

router.post('/login', passport.authenticate('local-login', {
  successRedirect : '/home',
  failureRedirect : '/login',
  failureFlash : true
}));

router.get('/logout', function(req, res) {
  req.logout();
  res.redirect('/');
});

router.get('/home', isLoggedIn, function(req, res, next) {
  res.render('home', { title: 'Quiz', index: true });
});

router.use('/tests', isLoggedIn, tests);
router.use('/results', isLoggedIn, results);
router.use('/questions', isLoggedIn, questions);

// route middleware to ensure user is logged in
function isLoggedIn(req, res, next) {
  if (req.isAuthenticated())
  return next();

  res.render('index', { title: 'Welcome!', index: true, message: "Requires Login!" });
}

module.exports = router;
