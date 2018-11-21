const dns = require('dns');
const { extractHostname } = require("./extracthostname");
const express = require('express');
const router = express.Router();
const { findByURL } = require('./findByURL');
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

  //check the url to see if it's an actual legit website that passes the dns lookup
  var w3 = dns.lookup(url, function (err, addresses, family) {
    if (err) {
      res.json({
        "error": "invalid URL"
      });
    } else {
      //find if url is in database
      findByURL(userURL, function (error, data) {
        if (data == undefined) {
          createURLEntry(userURL, function(err, data){
            if (err){
              res.json({
                "err": err
              })
            } else {
              res.json({
                "original_url": data.urlAddress,
                "short_url": data.id
              })
            }
          });
        } else {
          res.json({
            "original_url": userURL,
            "short_url": data.id
          })
        }
      })
    }
  })
})


module.exports = router;