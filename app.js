// main entry file

const express = require('express');
const dotenv = require('dotenv');
const defaultRouter = require('./lib/routers/defaults');

dotenv.config({ silent: true });


const app = express();

app.use('/users/login', require('./lib/routes/users')(defaultRouter()));


// const l = require('./lib/controllers/login/normalLoging');

// l.validateLogin('test', 'pwd');


const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
