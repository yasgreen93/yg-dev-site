exports.validateFormFields = (req, res, next) => {
  req.sanitizeBody('name'); // sanitizeBody is from the express-validator package.
  req.checkBody('name', 'Please tell me your name!').notEmpty();
  req.checkBody('email', 'Invalid email address').isEmail();
  req.checkBody('message', 'Message cannot be blank').notEmpty();
  const errors = req.validationErrors();
  if (errors) {
    req.session.flash = { error: errors.map(err => err.msg) };
    res.render('contact', { body: req.body, flashes: req.flash() });
    return;
  }
  next();
}
