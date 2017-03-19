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

// Configuration =================


console.log(path.join(__dirname, '../client'));
app.use(express.static(path.join(__dirname, '../client'))); //  set the static files location /public/img will be /img for users
app.use(express.static(path.join(__dirname, './')));
app.use(express.static(path.join(__dirname, '../../')))
app.use(morgan('dev')); //log every request to the console
app.use(bodyParser.urlencoded({'extended':'true'})); // parse application/x-www-form-urlencoded
app.use(bodyParser.json()); // parse application/json
app.use(bodyParser.json({type:'application/vnd.api+json'})); //application/vnd.api+json as json
app.use(methodOverride());
app.listen(8080);
console.log("App listening on at localhost:8080");
