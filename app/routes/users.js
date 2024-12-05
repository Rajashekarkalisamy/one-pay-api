const express = require('express');
const router = express.Router();
const userController = require("../controllers/userController");
const smtpMailController = require("../controllers/smtpMailController");

router.post('/create', userController.create);
router.post('/login', userController.login);
router.post('/verify', userController.verify);
router.get('/verifyemail/:token', userController.verifyemail);
router.post('/forgotPasswordMail', smtpMailController.forgotPasswordMail);
router.post('/forgotPassword', userController.forgotPassword);

module.exports = router;
