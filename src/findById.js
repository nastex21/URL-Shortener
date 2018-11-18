var urlModel = require('./urlmodel')

module.exports.findByID = function findUser(idNum, callback){
  urlModel.findOne({id: idNum}, function(err, data){
      if(err){
          return callback(err);
      } else if (data){
          return callback(null, data);
      } else {
          return callback();
      }
  });
}
