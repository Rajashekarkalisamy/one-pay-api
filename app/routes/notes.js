var express = require('express');
var router = express.Router();
var notesController = require("../controllers/notesController");

/* GET Notes listing. */
router.get('/', function(req, res, next) {
  res.send('notes Router');
});
router.post('/create', notesController.create);

module.exports = router;
