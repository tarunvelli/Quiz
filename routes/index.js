var express = require('express');
var router = express.Router();

var tests = require('./testsRoutes');
var results = require('./resultsRoutes');
var questions = require('./questionsRoutes');

router.get('/', function(req, res, next) {
  res.render('index', { title: 'Welcome!', index: true });
});

router.get('/signup', function(req, res, next) {
  res.render('signup', { title: 'Sign up', index: true });
});

router.get('/login', function(req, res, next) {
  res.render('login', { title: 'Log in', index: true });

});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Quiz', index: true });
});

router.use('/tests', tests);
router.use('/results', results);
router.use('/questions', questions);

module.exports = router;
