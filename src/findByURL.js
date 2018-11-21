var urlModel = require('./urlmodel')

//find by URL address to see if it's already in the database
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