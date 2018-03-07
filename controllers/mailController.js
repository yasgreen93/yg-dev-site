const mail = require('../handlers/mail');

exports.sendEmail = async (req, res, next) => {
  const { name, email, subject, message } = req.body;
  await mail.send({
    name,
    email,
    subject,
    message,
    filename: 'email'
	})
	req.session.flash = { success: ['Thank you for getting in contact!'] };
	return next();
}
