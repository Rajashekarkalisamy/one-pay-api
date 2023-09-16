/* Mongo Credentials */
const sequelize = require("sequelize");

module.exports.mongo = {
  url: process.env.MONGO_URL
}

/* Mysql Connection */
module.exports.mysql = new sequelize(
  process.env.MYSQL_DATABASE,
  process.env.MYSQL_USERNAME,
  process.env.MYSQL_PASSWORD,
  {
      dialect: "mysql",
      host: process.env.MYSQL_HOST,
  }
);
