var urlModel = require('./urlmodel')

module.exports.findByURL = function(url, callback){
  urlModel.findOne({urlAddress: url}, function(err, data){
      if(err){
          return callback(err);
      } else if (data){
          return callback(null,data);
      } else {
          return callback();
      }
  });
}