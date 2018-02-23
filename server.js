process.env.NODE_ENV = process.env.NODE_ENV || 'development';

const configureMongoose = require('./config/mongoose');
const configurePassport = require('./config/passport');
const configureExpress = require('./config/express');
const db = configureMongoose();
const passport = configurePassport();
const app = configureExpress(); 

app.listen(80);
module.exports = app;

console.log('Server running at http://localhost:3000/');