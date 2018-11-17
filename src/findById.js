var urlModel = require('./urlmodel')

var findByID = function (idNum) {
    urlModel.find({
      id: idNum,
    }, function (err, data) {
      if (err) {
        return console.error(err);
      } else {
        console.log("findByID");
        return data;
      }
    });
  };

  module.exports = {
    findByID: findByID
}