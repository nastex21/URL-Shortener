var urlModel = require('./urlmodel');

var findByURL = function (url) {
    urlModel.find({
      urlAddress: url
    }, function (err, data) {
      if (err) {
        return console.error(err);
      } else {
        console.log("findByURL");
        return console.log(data);
      }
    });
  };

  module.exports = {
    findByURL: findByURL
}