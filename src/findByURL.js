var urlModel = require('./urlmodel')

var findByURL = function (url) {
  console.log("findByURL is running")
    urlModel.find({
      urlAddress: url
    }, function (err, data) {
      if (err) {
        return console.error(err);
      } else {
        return console.log(null, data);
      }
    });
  };

  module.exports = {
    findByURL: findByURL
}