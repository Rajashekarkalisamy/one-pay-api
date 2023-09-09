// const User = require('../models/user.model.js');
const MySql = require('../models/mySql/user.model.js');
const con = MySql.mysql;


module.exports.create = async (req, res) => {
    // Validate request
    if (!req.body) {
        return res.status(400).send({
            message: "Request Body can't be empty"
        });
    }
    try {
      const exists = await checkEmailExists('email',req.body.email);
      if (exists) {
          return res.status(400).send({
              message: `The email ${req.body.email} exists in the table.`
          });
      } else {
        var userName = req.body.email.split('@')[0];
        await findAvailableUsername(userName)
            .then((availableUsername) => {
              console.log(availableUsername,"availableUsername")
              userName = availableUsername;
            })
            .catch((error) => {
              console.error('Error:', error);
            });
          const userData = {
              username: userName,
              email: req.body.email
          };

          con.query('INSERT INTO users SET ?', userData, (err, result) => {
              if (err) {
                  console.error('Error executing INSERT query:', err);
                  return res.status(500).send({
                      message: 'Error executing INSERT query'
                  });
              }
              // Insertion successful
              return res.status(200).send({
                  message: 'User created successfully'
              });
          });
      }
  } catch (error) {
      console.error('Error checking email existence:', error);
      return res.status(500).send({
          message: 'Error checking email existence'
      });
  }
}

module.exports.userslist = (req, res) => {
    User.find({}, (err, docs) => {
        if (err) {
            return res.status(500).send({
                message: err.message || "Some error occurred while creating the User."
            });
        }
        return res.status(200).send(docs)
    });
}

async function checkEmailExists(fieldName,value) {
  return new Promise((resolve, reject) => {
    var sql = `SELECT ${fieldName} AS count FROM users WHERE ${fieldName} = ? ORDER BY id DESC`
    con.query(sql, [value], function(err, rows, fields) {
        if (err) {
            reject(err);
        } else {
          console.log(rows)
          if(rows.length > 0){
            const count = rows[0].count;
            resolve(count);
          } else {
            resolve(0);
          }
            
        }
    });
  });
}

async function findAvailableUsername(userName) {
  let originalUserName = userName;
  let counter = 1;

  while (true) {
    const userNameExist = await checkEmailExists('username',userName);
    if (!userNameExist) {
      return userName; // Found an available username
    }
    
    // Username already exists, try the next one
    userName = originalUserName + counter;
    counter++;
  }
}
