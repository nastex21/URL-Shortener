const dns = require('dns');
const { extractHostname } = require("./extracthostname");
const express = require('express');
const router = express.Router();
const { findByURL } = require('./findByURL')
const { findByID } = require('./findByID');
const { createURLEntry } = require("./createEntry");

//grab the user input
router.route('/shorturl/new').post(function (req, res) {
  var userUrl = req.body.url;
  console.log(userUrl)
  var url = extractHostname(userUrl);

  var w3 = dns.lookup(url, function (err, addresses, family) {
    if (err) {
      res.json({
        "error": "invalid URL"
      })
    } else {
      if (findByURL(userUrl) == null || undefined)  {
        console.log(findByURL(userUrl))
        var i = 0;

      function findUnusedID() {
        if (findByID(i) == undefined) {
          return i;
        } else {
          i++;
          findUnusedID();
        }
      }
      var newID = findUnusedID();
      createURLEntry(newID, userUrl);
        } else {
          console.log("URL already in database!")
        }
    } 
  })
});

module.exports = router;