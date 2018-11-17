const mongoose = require('mongoose');

//create schema 
var urlSchema = new schema({
    id: Number,
    urlAddress: String
  });

module.exports = mongoose.model('urlModel', urlSchema);