const dns = require('dns');
const { extractHostname } = require("./extracthostname");
const express = require('express');
const router = express.Router();
const { findByURL } = require('./findByURL')
const { findByID } = require('./findByID');
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
      //createURLEntry(0, userURL);
      findByURL(userURL, function(err, urlFound){
        console.log(urlFound);
      });
    }
  })
});

module.exports = router;