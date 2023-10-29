var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");

router.post('/create', userController.create);
router.post('/login', userController.login);
router.post('/verify', userController.verify);
router.get('/verifyemail/:token', userController.verifyemail);

module.exports = router;
