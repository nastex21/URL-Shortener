const dns = require('dns');
const { extractHostname } = require("./extracthostname");
const express = require('express');
const router = express.Router();
const { findByURL } = require('./findByURL');
const { findByID } = require('./findById');
const { createURLEntry } = require("./createEntry");
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
      //createURLEntry(userURL);
        findByURL(userURL, function(error, data) {
         if(data == undefined){
           createURLEntry(userURL);
           console.log("undefined")
         } else {
           console.log("already in database")
           console.log(data);
         }
     });  

  /*    findByID(4, function(error, data){
      if(data == undefined){
        //createURLEntry(userURL);
        console.log("undefined")
      } else {
        console.log("already in database")
        console.log(data);
      }
     }) */
    }
  })
});

module.exports = router;