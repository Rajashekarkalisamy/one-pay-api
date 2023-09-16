const sequelize = require("sequelize");
const db = require("../../../config/database.config").mysql;
var user = db.define(
    "user",
    {
        id: { type: sequelize.INTEGER, primaryKey: true },
        email: { type: sequelize.STRING },
        username: { type: sequelize.STRING },
        password: { type: sequelize.STRING }
    },
    {
        freezeTableName: false,
        timestamps: false,
    }
);
module.exports = user;