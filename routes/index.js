var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/portfolio', function(req, res, next) {
  res.render('portfolio');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.get('/other', function(req, res, next) {
  res.render('other');
});

module.exports = router;
