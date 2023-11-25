var express = require('express');
var router = express.Router();
const tourController = require('../controllers/tourController');

router.post('/create', tourController.create);
router.get('/list', tourController.list);

module.exports = router;
