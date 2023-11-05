var express = require('express');
var router = express.Router();
const tourController = require('../controllers/tourController');

router.post('/create', tourController.create);

module.exports = router;
