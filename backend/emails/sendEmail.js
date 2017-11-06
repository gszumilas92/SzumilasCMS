'use strict';
const nodemailer = require('nodemailer')
const fs = require('fs')
// To Send an email invoke Function with (reciver, subject, html message)

module.exports = function(to, subject, html) {

    const smtpConfig = fs.readFileSync(__dirname + '/../private/passwords/smtpConfig.json', 'utf8')
    const message = {
        disableFileAccess: true,
        to: to,
        subject: subject,
        html: html
    }
    nodemailer.createTestAccount((err, account) => {

        let transporter = nodemailer.createTransport(JSON.parse(smtpConfig))

        transporter.sendMail(message, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
    });

}