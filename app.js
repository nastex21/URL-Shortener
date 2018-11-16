require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
var dns = require('dns')
require("./src/database")
var cors = require('cors');
//var schema = mongoose.Schema;
var url;

app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});
/* 
//convert from url to hostname http(s)://www.google.com -> google.com
function extractHostname(url) {
  var hostname;
  //find & remove protocol (http, ftp, etc.) and get hostname

  if (url.indexOf("//") > -1) {
    hostname = url.split('/')[2];
  } else {
    hostname = url.split('/')[0];
  }

  //find & remove port number
  hostname = hostname.split(':')[0];
  //find & remove "?"
  hostname = hostname.split('?')[0];

  return hostname;
}

//grab the user input
app.post('/api/shorturl/new', function (req, res) {
  var userUrl = req.body.url;

  url = extractHostname(userUrl);

  var w3 = dns.lookup(url, function (err, addresses, family) {
    console.log(addresses)
    return addresses;
  });
})


var createAndSaveURL = function (idNum, url) {
  var freecodecamp = new urlModel({
    id: idNum,
    urlAddress: url
  });

  freecodecamp.save(function (err, data) {
    if (err) {
      return console.error(err);
    } else {
      return null, data
    }
  });
};

var findById = function (idNum) {

  urlModel.find({
    id: idNum
  }, function (err, data) {
    if (err) {
      return console.error(err);
    } else {
      return null, data;
    }
  });
};



var removeById = function (idNum) {

  urlModel.deleteMany({id: idNum}, function (err, data) {
    if (err) {
      return console.error(err);
    } else {
      return null, data;
    }
  });
};

 */


app.listen(port, () => console.log("It's listening"))