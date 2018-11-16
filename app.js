require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
var dns = require('dns')
const mongoose = require('mongoose');
var cors = require('cors');
var schema = mongoose.Schema;
var url;

app.use(cors());

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));

app.use('/public', express.static(process.cwd() + '/public'));
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
});

app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

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

var db = mongoose.connection;

//create schema 
var urlSchema = new schema({
  id: Number,
  urlAddress: String
})

//create model
const urlModel = mongoose.model('urlModel', urlSchema);

var createAndSaveURL = function (done) {
  var freecodecamp = new urlModel({
    id: 1,
    urlAddress: "freecodecamp.com"
  })

  freecodecamp.save(function (err, data) {
    if (err){
      return console.error(err);
    } else {
      return null, data
    }
  })
}

var findPeopleByName = function(idNum) {

  urlModel.find({id: idNum}, function(err, data){
    if (err){
      return console.error(err);
    } else {
      return console.log(data)
    }
  })

};

console.log(findPeopleByName(1))

app.listen(port, () => console.log("It's listening"))