let URLModel = ('./urlmodel') //schema for urls in the database

//create an entry in the database
var createURLEntry = function (idNum, url) {
    var freecodecamp = new urlModel({
      id: idNum,
      urlAddress: url
    });
  
    freecodecamp.save(function (err, data) {
      if (err) {
        return console.error(err);
      } else {
        return null, data
      }
    });
  };

module.exports = {
    createURLEntry: createURLEntry
}