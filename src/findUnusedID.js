const { findByID } = require('./findByID');
var urlModel = require('./urlmodel');

var i = 0;

exports.findUnusedID = function findUnusedID(callback){
    console.log(callback);
    console.log(i);
    urlModel.findOne({id: i}, function(err, data){
        if(err){
            console.log("err");
            return callback(err);
        } else if (data){
            console.log("else if");
            i = i + 1;
            return callback(null, i);
        } else {
            console.log("else");
            console.log(i);
            return callback(null, i);
        }
    });
}