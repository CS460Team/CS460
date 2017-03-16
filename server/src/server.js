// set up ========================
var express = require('express');
var app = express();  //Create App with express
var mongoose = require('mongoose');   //mongoose for mongoDB
var morgan = require('morgan');       //Log requests to the console (Express 4)
var bodyParser = require('body-parser');  //Pull information from HTML POST (Express 4)
var methodOverride = require('method-override');  // Simulate Delete and Put (Express 4)

// Configuration =================


app.use(express.static(__dirname + '/public')); //  set the static files location /public/img will be /img for users
app.use(morgan('dev')); //log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({'application/vnd.api+json'})); //application/vnd.api+json as json
app.use(methodOverride());
