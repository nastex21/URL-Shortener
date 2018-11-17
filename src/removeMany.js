var urlModel = require('./urlmodel');

var removeMany = function (idNum) {

    urlModel.deleteMany({id: idNum}, function (err, data) {
      if (err) {
        return console.error(err);
      } else {
        return data;
      }
    });
  };

module.exports = {
  removeMany: removeMany
}