const userModel = require("./mysql/user.model");
const TourModel = require('./mongo/tours.model');
const MemberModel = require('./mongo/members.model');
const model = {};
/* Mysql */
model.user = userModel;

/* Mongo */
model.tour = TourModel;
model.member = MemberModel;

module.exports = model;