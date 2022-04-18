
const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');
const { api_mailgun, mailgun_domain } = require('./config') 


const auth = {
    auth: {
        api_key: process.env.API_KEY || api_mailgun, // TODO: Replace with your mailgun API KEY
        domain: process.env.DOMAIN || mailgun_domain // TODO: Replace with your mailgun DOMAIN
    }
};

const transporter = nodemailer.createTransport(mailGun(auth));


const sendMail = (email, subject, text, cb) => {
    const mailOptions = {
        from: 'YOUR MAIL', // TODO replace this with your own email
        to: email, // TODO: the receiver email has to be authorized for the free tier
        subject: subject,
        text: text
    };

    transporter.sendMail(mailOptions, function (err, data) {
        if (err) {
            return cb(err, null);
        }
        return cb(null, data);
    });
}

module.exports = sendMail;
