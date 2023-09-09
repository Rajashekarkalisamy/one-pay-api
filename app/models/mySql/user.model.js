const mysql = require('mysql');
const dbConfig = require("../../../config/database.config.js");
console.log(dbConfig);


const con = mysql.createConnection({
  host: dbConfig.host,
  user: dbConfig.user,
  password: dbConfig.password,
  database: dbConfig.db,
});
con.connect((error) => {
  if (error) {
    console.error("Error connecting to MySQL: ", error);
    return;
  }
  console.log("Connected to MySQL!");
});

module.exports = con;
