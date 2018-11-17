const dns = require('dns');
const { extractHostname } = require("./extracthostname");
const express = require('express');
const router = express.Router();

//grab the user input
router.route('/shorturl/new').post( function (req, res) {
    var userUrl = req.body.url;
  
    var url = extractHostname(userUrl);
  
    var w3 = dns.lookup(url, function (err, addresses, family) {
      console.log(addresses);
      return addresses;
    });
  });

module.exports = router;