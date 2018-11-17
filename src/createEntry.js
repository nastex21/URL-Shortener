var URLModel = require('./urlmodel') //schema for urls in the database
console.log("createEntry is running")
//create an entry in the database
var createURLEntry = function (idNum, url) {
    var newEntry = new URLModel({
      id: idNum,
      urlAddress: url
    });
  
    newEntry.save(function (err, data) {
      if (err) {
        return console.error(err);
      } else {
        console.log("Success! Entry added!")
        return null, data
      }
    });
  };

module.exports = {
    createURLEntry: createURLEntry
}