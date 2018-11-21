const URLModel = require('./urlmodel'); //schema for urls in the database

//create an entry in the database
var createURLEntry = function (url, callback) {

  //model for entry
  var newEntry = new URLModel({
    urlAddress: url
  });

  //save and then run function
  newEntry.save().then(function (data) {
    contFunction(data)
    })

    //create the shortened address from the data in the save function
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