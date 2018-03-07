const express = require('express');
const router = express.Router();
const { validateFormFields } = require('../handlers/validation');
const { catchErrors } = require('../handlers/errorHandlers');
const { sendEmail } = require('../controllers/mailController'); 

router.get('/', function(req, res, next) {
  res.render('index');
});

router.get('/portfolio', function(req, res, next) {
	req.flash('success', 'Wooooo');
	req.flash('info', 'infowooooo');
	req.flash('error', 'errorwooooo');
  res.render('portfolio');
});

router.get('/contact', function(req, res, next) {
  res.render('contact');
});

router.post('/contact',
	validateFormFields,
	catchErrors(sendEmail),
	function(req, res, next) {
		res.redirect('/contact')
	}
);

router.post('/contact2', sendEmail);

router.get('/other', function(req, res, next) {
  res.render('other');
});

module.exports = router;
