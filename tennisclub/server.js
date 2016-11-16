var express = require('express');
var mongoose = require('mongoose');
var bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
var session = require('express-session');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);
var port = process.env.PORT || 3000;
//var passport = require('passport');
//var flash    = require('connect-flash');

var winston = require('winston');
require('winston-loggly');
 
 winston.add(winston.transports.Loggly, {
    token: "5f133a72-e45d-4009-925f-18dc87ce847d",
    subdomain: "friclab",
    tags: ["Winston-NodeJS"],
    json:true
});

/*app.use(function(req, res, next) {
  winston.log('info', req.path + ' start');
  next();
  winston.log('info', req.path + ' end');
});*/
app.disable('etag');
console.log('basedir: '+__dirname);
app.use(express.static(__dirname + '/public'));

 
http.listen(port);
console.log('listening on port '+port);
winston.info('listening on port '+port);



