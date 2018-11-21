var URLModel = require('./urlmodel'); //schema for urls in the database

console.log("createEntry is running")
//create an entry in the database
var createURLEntry = function (url) {

    var newEntry = new URLModel({
      urlAddress: url
    });
  
  newEntry.save().then(function(data){
    var baseHTTP = "http://localhost:3000/api/shorturl/";
    var numID = data.id;
    var stringID = numID.toString();
    var shortURL = baseHTTP + stringID;
    console.log(shortURL);
    URLModel.findByIdAndUpdate({_id: data._id}, {short_url: shortURL}, function (err, data){
      if (err){
        console.log(err);
      } else {
        return null, data;
      }
    })
  }) 

  };

module.exports = {
    createURLEntry: createURLEntry
}