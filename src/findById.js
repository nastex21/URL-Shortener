var urlModel = require('./urlmodel')

var findByID = function (idNum) {
  console.log("findByID is running")
    urlModel.find({
      id: idNum,
    }, function (err, data) {
      if (err) {
        return console.error(err);
      } else {
        return console.log(null, data);
      }
    });
  };

  module.exports = {
    findByID: findByID
}