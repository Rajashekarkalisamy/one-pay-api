var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'One Pay!' });
});
router.post('/', function(req, res, next) {
  res.json({ title: 'One Pay' });
});

module.exports = router;
