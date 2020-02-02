const nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 587,
    secure: false,
    requireTLS: true,
    auth: {
        user: 'yourmail@gmail.com',
        pass: 'yourpassword'
    }
});

let options = {
    from: 'yourmail@gmail.com', //before send , turn on https://myaccount.google.com/lesssecureapps
    to: 'developerfauzan@asraja.com',
    subject: 'Test',
    // text: 'example text',
    html: '<h1>example text</h1>'
};

module.exports = {
    sendMail: () => {
        transporter.sendMail(options, (err, info) => {
            if (err) throw err
            console.log(info.messageId);
        });        
    }
}