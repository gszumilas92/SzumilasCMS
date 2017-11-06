'use strict';
const nodemailer = require('nodemailer')
const fs = require('fs')

module.exports = function(app) {

    const smtpConfig = fs.readFileSync(__dirname + '/../private/passwords/smtpConfig.json', 'utf8')

    nodemailer.createTestAccount((err, account) => {
        let message = {
            disableFileAccess: true,
            to: 'gszumilas92@gmail.com',
            subject: 'Message title',
            html: '<p>My Email Message</p>'
        };

        let transporter = nodemailer.createTransport(JSON.parse(smtpConfig))

        transporter.sendMail(message, (error, info) => {
            if (error) {
                return console.log(error);
            }
            console.log('Message sent: %s', info.messageId);
        });
    });

}