/**
 * Create express app on port 8000
 */
var express = require('express'),
    app = express(),
    port = 8000;

/**
 * Set up  express middleware
 */
var morgan = require('morgan'),
    bodyParser = require('body-parser');
    // log request into console
    app.use(morgan('dev'));
    // parse application/x-www-form-urlencoded
    app.use(bodyParser.urlencoded({ extended: true }));
    // parse application/json
    app.use(bodyParser.json());
    // serve angular.js logic
    app.use(express.static(__dirname + '/client'));



   var nodemailer = require('nodemailer');



/**
  * Include routes
  */


var router = express.Router();
    require('./routes')(router);
    app.use('/api', router);

app.listen(port);
console.log('Listening on port ' + port);