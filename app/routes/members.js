var express = require('express');
var router = express.Router();
const memberController = require('../controllers/memberController');

router.post('/create', memberController.create);
router.post('/list', memberController.list);
router.post('/delete', memberController.delete);

module.exports = router;
