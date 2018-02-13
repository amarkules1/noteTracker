const config = require('./config');
const express = require('express'); 
const morgan = require('morgan'); 
const compress = require('compression'); 
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const path = require('path');
const session = require('express-session');
module.exports = function() {
	const app = express();
	app.use(express.static(path.join(__dirname, '../public')));
	if (process.env.NODE_ENV === 'development') {
		app.use(morgan('dev'));
	} else if (process.env.NODE_ENV === 'production') {
		app.use(compress());  
	}
	  app.use(session({
	  saveUninitialized: true,
	  resave: true,
	  secret: config.sessionSecret
	  }))
	app.use(bodyParser.urlencoded({
		extended: true
	}));  
	app.use(bodyParser.json());
	app.use(methodOverride());
	
	app.set('views', './app/views');
	app.set('view engine', 'ejs');
  require('../app/routes/index.server.routes.js')(app);
  require('../app/routes/note.server.routes.js')(app);
  return app; 
};