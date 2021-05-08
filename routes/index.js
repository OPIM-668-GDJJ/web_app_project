var express = require('express');
var router = express.Router();

const MAPS_API_KEY = process.env.MAPS_API_KEY

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', {
    title: 'My App',
    mapKey: MAPS_API_KEY
  });
});

/* GET about page. */
router.get('/about', function(req, res, next) {
  res.render('about');
});

/* GET recipes page. */
router.get('/recipes', function(req, res, next) {
  res.render('recipes');
});

module.exports = router;
