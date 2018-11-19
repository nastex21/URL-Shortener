var URLModel = require('./urlmodel') //schema for urls in the database

console.log("createSHORTURL is running")
//create an entry in the database
var createShortURL = function (urlData, callback) {
        console.log("shortURL: " + urlData);

        URLModel.findOne({
                urlAddress: urlData
            }, function (err, data) {
                if (err) {
                    console.log("createshorturlERR: " + err);
                    return callback(err);
                } else if (data) {
                    console.log("createshorturlELSEIF: " + data);
                    return callback(null, data);
                } else {
                    console.log("createshorturlELSE");
                        return callback();
                    }
                })
        }


        module.exports = {
            createShortURL: createShortURL
        }