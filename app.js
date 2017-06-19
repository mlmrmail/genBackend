// main entry file

const express = require('express');
const dotenv = require('dotenv');
const defaultRouter = require('./lib/routers/defaults');

dotenv.config({ silent: true });


const app = express();



app.use('/login', require('./lib/routes/login')(defaultRouter()));


const l = require('./lib/controllers/login/normalLoging');

l.validateLogin('test', 'pwd');



const PORT = 8081;

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});

process.stdin.resume();

function exitHandler() {
  // queue.stop(exitProcess);
}

function exitProcess() {
//   logger.info('Exit with code 99');
  process.exit(99);
}

process.on('exit', exitHandler.bind());
process.on('SIGINT', exitHandler.bind());
process.on('uncaughtException', exitHandler.bind());
