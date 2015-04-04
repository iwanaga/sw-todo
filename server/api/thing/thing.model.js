'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var ThingSchema = new Schema({
  name: String,
  info: Date,
  done: Boolean
});

module.exports = mongoose.model('Thing', ThingSchema);
