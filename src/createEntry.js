var URLModel = require('./urlmodel'); //schema for urls in the database

console.log("createEntry is running")
//create an entry in the database
var createURLEntry = function (url, callback) {

  var newEntry = new URLModel({
    urlAddress: url
  });

  newEntry.save().then(function (data) {
    contFunction(data)
    })

  var contFunction = function(data) {
    var baseHTTP = "http://localhost:3000/api/shorturl/";
    var numID = data.id;
    var stringID = numID.toString();
    var shortURL = baseHTTP + stringID;
    URLModel.findByIdAndUpdate({_id: data._id}, {short_url: shortURL}, {new: true}, (err, updatedData) =>{
      if (err){
        callback(err);
      } else {
        callback(null, updatedData);
      }
    })
  }

};

module.exports = {
  createURLEntry: createURLEntry
}