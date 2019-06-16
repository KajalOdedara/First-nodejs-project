var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Hello' });
});

router.get('/home', function(req, res, next) {
  res.render('home', { title: 'Hello' });
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Hello' });
});
module.exports = router;
