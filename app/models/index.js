const userModel = require("./mysql/user.model");
const TourModel = require('./mongo/tours.model');
const model = {};
/* Mysql */
model.user = userModel;

/* Mongo */
model.tour = TourModel;

module.exports = model;