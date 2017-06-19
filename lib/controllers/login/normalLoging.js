// controlling normal login using username and password
const _ = require('lodash');
let user,
  pwd;


function getCredentials(username, password) {
  if (_.isEmpty(username) || _.isNull(username) || _.isEmpty(password) || _.isNull(password)) {
    console.log('the username and or the password is incorrect !');
    return -1;
  }
  this.username = username;
  this.password = password;
  return 0;
}

function checkIfExistInDb() {
    
    if()
    {
        return false;
    } 

    return true;
}


module.exorts = {
  getCredentials,
};
