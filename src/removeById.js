var removeById = function (idNum) {

    urlModel.deleteOne({id: idNum}, function (err, data) {
      if (err) {
        return console.error(err);
      } else {
        return null, data;
      }
    });
  };

module.exports = {
  removeById: removeById
}