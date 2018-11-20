var URLModel = require('./urlmodel'); //schema for urls in the database
var urlSchema = require('./urlmodel');

console.log("createEntry is running")

//create an entry in the database
var createURLEntry = function (url) {
    var newEntry = new URLModel({
      urlAddress: url
    });

    urlSchema.schema.pre('save', function(data){
      console.log("Here's your saved data: " + data);
    })
  
    newEntry.save(function (err, data) {
      if (err) {
        return console.error(err);
      } else {
        console.log("Success! Entry added!")
        return data;
      }
    })


  };

module.exports = {
    createURLEntry: createURLEntry
}