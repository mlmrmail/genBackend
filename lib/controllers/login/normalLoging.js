// controlling normal login using username and password
const _ = require('lodash');
const db = require('../db/mongo_database');
const commonDB = require('../db/common_db');

let user,
  pwd;

function validateParams(username, password) {
  if (_.isEmpty(username) || _.isNull(username) || _.isEmpty(password) || _.isNull(password)) {
    console.log('the username and or the password is incorrect !');
    return -1;
  }
  user = username;
  pwd = password;
  return 0;
}

function checkIfExistInDb(user, pwd) {
  const dbu = db.use('users');
  commonDB.find(dbu, { username: user })
    .then((out) => {
      console.log(out);
      return 0;
    })
    .catch(() => {
      return -1;
    });
}

function validateLogin(req, res, next) {
  console.log(req.body);
  if(validateParams(req.body.username, req.body.password) === 0) {
    if (checkIfExistInDb(req.body.username, req.body.password) === 0) {
      res.status(200);
      res.end(`User : ${req.body.username} has been found in the DB !`);
    }
    else {
      res.end("Couldn't find the specified user !");
    }
  }
  else {
    res.end("Invalid input parameters !");
  }

  // res.end(JSON.stringify(req.body));
}

module.exports = {
  validateLogin,
};

