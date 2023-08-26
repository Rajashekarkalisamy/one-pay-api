var express = require('express');
var router = express.Router();
var userController = require("../controllers/userController");
/* GET users listing. */
router.post('/create', userController.create);
router.post('/userslist', userController.userslist);

module.exports = router;
