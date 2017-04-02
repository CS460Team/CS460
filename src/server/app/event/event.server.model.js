/*jshint node:true*/
'use strict';

var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var EventSchema = new Schema({
    title: {
      type:String,
      default: 'New Event'
    },
    location: String,
    dateCreated: {type: Date, default: Date.now},
    dateUpdated: {
      type: Date,
      default: Date.now
    },
    notes: String,
    startDate: {
      type : Date,
      default: Date.now
    },
    endDate: Date
  });

mongoose.model('Event',EventSchema);
