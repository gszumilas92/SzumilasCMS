'use strict';
const fs = require('fs');
const nodemailer = require('nodemailer');
const htmlstream = fs.createReadStream('content.html')

nodemailer.createTestAccount((err, account) => {
    let message = {
        disableFileAccess: true,
        from: 'sender@server.com',
        to: 'gszumilas92@gmail.com',
        subject: 'Message title',
        text: 'Plaintext version of the message',
        html: '<p>MY EMAIL STUFF</p>'
    };

    // let poolConfig = 'smtps://username:password@smtp.example.com/?pool=true';
    // let poolConfig = {
    //     pool: true,
    //     host: 'smtp.gmail.com',
    //     port: 465,
    //     secure: true, // use TLS
    //     auth: {
    //         user: 'username',
    //         pass: 'password'
    //     }
    // };
    let smtpConfig = {
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false, // true for 465, false for other ports
        auth: {
            user: account.user, // generated ethereal user
            pass: account.pass  // generated ethereal password
        }
    };

    let transporter = nodemailer.createTransport(smtpConfig)

    // transport.sendMail({html: htmlstream}, function(err){
    //     if(err){
    //         // check if htmlstream is still open and close it to clean up
    //     }
    // })
    transporter.sendMail(message, (error, info) => {
        if (error) {
            return console.log(error);
        }
        console.log('Message sent: %s', info.messageId);
        // Preview only available when sending through an Ethereal account
        console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));

        // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@blurdybloop.com>
        // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
    });

    // // verify connection configuration
    // transporter.verify(function(error, success) {
    //     if (error) {
    //             console.log(error);
    //     } else {
    //             console.log('Server is ready to take our messages');
    //     }
    // });
});