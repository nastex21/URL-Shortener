var findById = function (idNum) {

    urlModel.find({
      id: idNum
    }, function (err, data) {
      if (err) {
        return console.error(err);
      } else {
        return null, data;
      }
    });
  };

  module.exports = {
    findById: findById
}