require('dotenv').config();
const cookieSession = require('cookie-session');
const flash = require('express-flash');
const express = require('express');
const path = require('path');
const favicon = require('serve-favicon');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');
const helpers = require('./helpers');
const errorHandlers = require('./handlers/errorHandlers');

const routes = require('./routes/index');

const app = express();
const PORT = process.env.PORT || 3000

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');
app.use(express.static(path.join(__dirname, 'public')));
app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));

app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(expressValidator());
app.use(cookieParser('keyboard cat'));
app.use(cookieSession({
  name: 'session',
  secret: process.env.SECRET,
	keys: [process.env.SECRET_KEY],
	maxAge: 24 * 60 * 60 * 1000,
}));
app.use(flash());

app.use((req, res, next) => {
	res.locals.h = helpers;
  res.locals.flashes = req.flash();
  res.locals.currentPath = req.path;
  next();
});

app.use('/', routes);

// If that above routes didnt work, we 404 them and forward to error handler
app.use(errorHandlers.notFound);

// One of our error handlers will see if these errors are just validation errors
app.use(errorHandlers.flashValidationErrors);

// Otherwise this was a really bad error we didn't expect! Shoot eh
if (process.env.NODE_ENV !== 'production') {
  /* Development Error Handler - Prints stack trace */
  app.use(errorHandlers.developmentErrors);
}

// production error handler
app.use(errorHandlers.productionErrors);

app.listen(PORT, () => {
  console.log(`Express running → PORT ${PORT}`);
});
