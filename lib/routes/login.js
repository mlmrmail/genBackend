const loginPost = require('../controllers/login/normalLoging');
const _ = require('lodash');
// const appointmentGet = require('../controllers/appointment/appointment_get');
// const appointmentPut = require('../controllers/appointment/appointment_put');
// const validate = require('express-validation');
// const appointmentValidation = require('../validation/appointment');


function login(router) {
  router.post('/', _.partial(loginPost.validateLogin));
  return router;
}

module.exports = login;
