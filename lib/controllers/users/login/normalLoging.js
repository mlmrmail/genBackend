// controlling normal login using username and password
const _ = require('lodash');
const db = require('../../db/mongo_database');
const commonDB = require('../../db/common_db');

let user, pwd;

function validateParams(username, password) {
  if (_.isEmpty(username) || _.isNull(username) || _.isEmpty(password) || _.isNull(password)) {
    console.log('the username and or the password is incorrect !');
    return -1;
  }
  user = username;
  pwd = password;
  return 0;
}

function userExists(user, pwd) {
  return new Promise((resolve, reject) => {
    const dbu = db.use('users');
    commonDB.find(dbu, { username: user, password: pwd })
      .then((out) => {
        console.log(out);
        if(out.length > 0) 
        {
          resolve(true);
        }
        else {
          console.log('User not found !')
          reject(false);
        }
      })
      .catch((err) => {
        console.log("error msg: " + JSON.stringify(err));
        reject(false);
      });
  });
}

function authorizeLogin(req, res, next) {
  console.log(req.body);
  if(validateParams(req.body.username, req.body.password) === 0) {
    userExists(req.body.username, req.body.password)
    .then(() => {
      res.status(200);
      res.end(`User : ${req.body.username} found !!!`);
      return true;
    })
    .catch(() => {
      res.end("Couldn't find the specified user !");
      return false;
    });

  }
  else {
    res.end("Invalid input parameters !");
    return false;
  }
}

module.exports = {
  authorizeLogin,
};

