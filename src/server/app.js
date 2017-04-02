/*jshint node:true*/
"use strict";

// set up ========================
var express = require('express');
var app = express();  //Create App with express
var mongoose = require('mongoose');   //mongoose for mongoDB
var morgan = require('morgan');       //Log requests to the console (Express 4)
var bodyParser = require('body-parser');  //Pull information from HTML POST (Express 4)
var methodOverride = require('method-override');  // Simulate Delete and Put (Express 4)
var path = require('path');
var cors = require('cors');
var routes;

var config = require('./config');

mongoose.connect(config.dbURL);

// Configuration =================

app.use(morgan('dev')); //log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type:'application/vnd.api+json'})); //application/vnd.api+json as json
app.use(cors()); //Enable all CORS requsets
app.use(methodOverride());
app.use(function(req, res, next) {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST');
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type, Authorization');
    next();
});


routes = require('./app/event/event.server.routes')(app);

console.log(path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client'))); //  set the static files location /public/img will be /img for users
app.use(express.static(path.join(__dirname, './')));
app.use(express.static(path.join(__dirname, '../../')));



app.listen(8080);
console.log("App listening on at localhost:8080");
