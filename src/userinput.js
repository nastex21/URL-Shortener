const dns = require('dns');
const { extractHostname } = require("./extracthostname");
const express = require('express');
const router = express.Router();
const { findByURL } = require('./findByURL')
const { findByID } = require('./findByID');
const { createURLEntry } = require("./createEntry");

//grab the user input
router.route('/shorturl/new').post(function (req, res) {
  var userURL = req.body.url;
  var url = extractHostname(userURL);

  var i = 0;

  function findUnusedID() {
    if (findByID(i) == undefined) {
      return i;
    } else {
      i++;
      findUnusedID();
    }
  }

  var w3 = dns.lookup(url, function (err, addresses, family) {
    if (err) {
      res.json({
        "error": "invalid URL"
      });
    } else {
      if (findByURL(userURL) == undefined) {
        console.log("undefined again");
        //var newID = findUnusedID();
        //console.log(findByURL(userURL));
        //console.log(newID);
        //createURLEntry(0, userURL);

      } else if (findByURL(userURL) === []){
        console.log("empty array");
      } else {
        console.log("ELSE");
        console.log(findByURL(userURL))
        console.log("URL already in database!");
      }
    }
  })
});

module.exports = router;