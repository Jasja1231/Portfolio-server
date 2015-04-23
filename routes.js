/**
 * Route definitions is here
 */
module.exports = function(router) {
  var nodemailer = require('nodemailer');
    router.route('/test')

        .get(function (req, res) {
           var obj=[{
           	name:"Vova",
           	age:21
           },
           {
           	name:"Roman",
           	age:21
           }]
            res.send(obj);

        });

    router.route('/tes')

        .get(function (req, res) {
           var obj2="hi,world"
            res.send(obj2);

        });

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