const mongoose = require('mongoose');
var schema = mongoose.Schema;
const AutoIncrement = require('mongoose-sequence')(mongoose);

//create schema 
var urlSchema = new schema({
  id: Number,
  urlAddress: String
});


urlSchema.plugin(AutoIncrement, {id:'order_seq', inc_field: 'id'});
module.exports = mongoose.model('urlModel', urlSchema);