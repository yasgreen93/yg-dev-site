const mail = require('../handlers/mail');

exports.sendEmail = async (req, res) => {
  const { name, email, subject, message } = req.body;
  await mail.send({
    name,
    email,
    subject,
    message,
    filename: 'email'
  })
  req.flash('success', 'Thank you for getting in contact!');
  res.render('/contact');
}
