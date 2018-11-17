const mongoose = require('mongoose');
var schema = mongoose.Schema;
console.log("urlmodel is running")
//create schema 
var urlSchema = new schema({
  id: Number,
  urlAddress: String
});

module.exports = mongoose.model('urlModel', urlSchema);