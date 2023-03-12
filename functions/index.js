const functions = require('firebase-functions');
const nodemailer = require('nodemailer');
const admin = require('firebase-admin');
admin.initializeApp();

exports.sendWelcomeEmail = functions.database.ref('/users/{userId}').onCreate((snapshot, context) => {
  const user = snapshot.val();

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'a.arincaslan@gmail.com',
      pass: ''
    }
  });

  const mailOptions = {
    from: 'a.arincaslan@gmail.com',
    to: user.email,
    subject: 'Welcome to our app',
    text: `Hello ${user.displayName},\n\nThank you for signing up for our app.`
  };

  return transporter.sendMail(mailOptions);
});
