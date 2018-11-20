const dns = require('dns');
const {
  extractHostname
} = require("./extracthostname");
const express = require('express');
const router = express.Router();
const {
  findByURL
} = require('./findByURL');
const {
  createShortURL
} = require('./createShortURL')
const {
  createURLEntry
} = require("./createEntry");
const bodyParser = require('body-parser');

router.use(bodyParser.json())
router.use(bodyParser.urlencoded({
  extended: false
}));

//grab the user input
router.route('/shorturl/new').post(function (req, res) {
  var userURL = req.body.url;
  console.log(req.body)
  var url = extractHostname(userURL);

  var w3 = dns.lookup(url, function (err, addresses, family) {
    if (err) {
      res.json({
        "error": "invalid URL"
      });
    } else {
      //createURLEntry(userURL);

      findByURL(userURL, function (error, data) {
        if (data == undefined) {
          createURLEntry(userURL);
        } else {
          console.log("already in database")
          console.log("Id: " + data);
          res.json({
            "original_url": userURL,
            "short_url": data.short_url
          })
        }
      })
    }
  })
})


module.exports = router;