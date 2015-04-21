/**
 * Route definitions is here
 */
module.exports = function(router) {

    router.route('/test')

        .get(function (req, res) {

            res.send('LOL!');

        });

    router.route('/form')

        .post(function (req, res) {

   var response = 'Hi ' + req.body.name + '! This is your email ' + req.body.email + ',your message:' + req.body.message;
            res.send(response);

        });    

};