const loginPost = require('../controllers/login/normalLoging');
// const appointmentGet = require('../controllers/appointment/appointment_get');
// const appointmentPut = require('../controllers/appointment/appointment_put');
// const validate = require('express-validation');
// const appointmentValidation = require('../validation/appointment');


function login(router) {

  router.post('/', loginPost.validateLogin());
//   router.get('/', validate(appointmentValidation.appointment_get), _.partial(appointmentGet.getAppointments, db));
//   router.put('/:appointment_id', validate(appointmentValidation.appointment_put), _.partial(appointmentPut.updateAppointment, db));

  return router;
}

module.exports = login;
