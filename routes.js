/**
 * Route definitions is here
 */
module.exports = function(router) {



var nodemailer = require('nodemailer');
 
    router.route('/form')



        .post(function (req, res) {
  var transporter = nodemailer.createTransport();
   var response = 'Hi ' + req.body.name + '! This is your email ' + req.body.email + ',your message:' + req.body.message;
   var email=req.body.email;
   var message=req.body.message;
   var theme='message from' + req.body.name;

transporter.sendMail({
    from: email,
    to: 'bambukvova@i.ua',
    subject: theme,
    text: message
});

                res.send(response);
});
      };