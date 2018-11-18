const dns = require('dns');
const { extractHostname } = require("./extracthostname");
const express = require('express');
const router = express.Router();
const { findByURL } = require('./findByURL')
const { createURLEntry } = require("./createEntry");
const { findUnusedID } = require("./findUnusedID");
const bodyParser = require('body-parser');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: false
}));

//grab the user input
router.route('/shorturl/new').post(function (req, res) {
  var userURL = req.body.url;
  var url = extractHostname(userURL);

  var w3 = dns.lookup(url, function (err, addresses, family) {
    if (err) {
      res.json({
        "error": "invalid URL"
      });
    } else {
      //createURLEntry(0, userURL);
      findByURL(userURL, function(error, data) {
         if(data == undefined){
           console.log("true");
          var findUnusedID =function(error, data){
            if (error){
              console.log(error);
            } else {
              if (typeof data == "number"){
                console.log(data)
                console.log("true");
              } else {
                console.log(data);
                console.log(typeof data);
                console.log("false");
                findUnusedID();
              }
            }
           }
           findUnusedID();
         } else {
           console.log('false');
         }
     });
    }
  })
});

module.exports = router;