// controlling normal login using username and password
const _ = require('lodash');
const db = require('../db/mongo_database');
const commonDB = require('../db/common_db');

let user, pwd;

function getCredentials(username, password) {
  if (_.isEmpty(username) || _.isNull(username) || _.isEmpty(password) || _.isNull(password)) {
    console.log('the username and or the password is incorrect !');
    return -1;
  }
  user = username;
  pwd = password;
  return 0;
}

function checkIfExistInDb() {
  const dbu = db.use('cats');
  commonDB.find(dbu, { name: 'cat3' }, { date: -1 })
    .then((out) => {
      console.log(out);
    })
    .catch();

  return true;
}

function validateLogin(req, res) {
  console.log(req.body);
  res.end("ok");
}

module.exports = {
  validateLogin,
};

