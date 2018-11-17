require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
var cors = require('cors');
require("./src/database") //connect to the database when initialized
let URLModel = ('./src/urlmodel') //schema for urls in the database
var url
const { extractHostname } = require("./src/userinput")
const bodyParser = require('body-parser')
const dns = require('dns')

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use(cors());


app.use('/public', express.static(process.cwd() + '/public'));


app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

//grab the user input
app.post('/api/shorturl/new', function (req, res) {
  var userUrl = req.body.url;

  url = extractHostname(userUrl);

  var w3 = dns.lookup(url, function (err, addresses, family) {
    console.log(addresses)
    return addresses;
  });
})
/* 



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