const functions = require("firebase-functions");
const nodemailer = require("nodemailer");
const admin = require("firebase-admin");
admin.initializeApp();

/**
 * Converts date string to milliseconds.
 * @param {string} dateString - The date string to convert.
 * @return {number} The date in milliseconds.
 */
function dateToMillis(dateString) {
  const [year, month, day] = dateString.split("-").map(Number);
  return new Date(year, month - 1, day).getTime();
}

/**
 * Handles cleaning old reports.
 * @param {Object} context - The context object.
 * @return {Promise} A promise that resolves when the process completes.
 */
function handleCleanOldReports(context) {
  const now = Date.now();
  const threeMonthsAgo = now - (3 * 30 * 24 * 60 * 60 * 1000);
  const reportsRef = admin.database().ref("users");

  return reportsRef.once("value").then((snapshot) => {
    const updates = {};
    snapshot.forEach((userSnapshot) => {
      const userId = userSnapshot.key;
      const userReports = userSnapshot.val().reports;

      if (userReports) {
        Object.keys(userReports).forEach((reportId) => {
          const report = userReports[reportId];
          if (report.projectData.reportDate &&
            dateToMillis(report.projectData.reportDate) < threeMonthsAgo
          ) {
            updates[`/users/${userId}/reports/${reportId}`] = null;
          }
        });
      }
    });

    if (Object.keys(updates).length > 0) {
      return reportsRef.update(updates);
    }
    return null;
  });
}

exports.cleanOldReports = functions.pubsub
    .schedule("0 12 1 * *")
    .timeZone("Europe/Istanbul")
    .onRun(handleCleanOldReports);

/**
 * Sends a welcome email when a new user is created.
 * @param {Object} snapshot - The snapshot object.
 * @param {Object} context - The context object.
 * @return {Promise} A promise that resolves when the email is sent.
 */
exports.sendWelcomeEmail = functions.database
    .ref("/users/{userId}")
    .onCreate((snapshot, context) => {
      const user = snapshot.val();
      const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
          user: "a.arincaslan@gmail.com",
          pass: "884cpvqJ7",
        },
      });

      const mailOptions = {
        from: "a.arincaslan@gmail.com",
        to: user.email,
        subject: "Welcome to our app",
        text: `Hello ${user.displayName},\n Hoşgeldiniz.`,
      };

      return transporter.sendMail(mailOptions);
    });
