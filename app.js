require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserInput = require('./src/userinput');
const URLModel = require('./src/urlmodel');

//connect to database
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true
}).then(
  () => {
    console.log('Database is connected')
  },
  err => {
    console.log('Can not connect to the database' + err)
  }
);

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));


//drop db
/* mongoose.connect(process.env.MONGO_URI);
mongoose.set('debug', true);
mongoose.connection.dropDatabase(error => {
  console.log(error);
  process.exit(0);
});  */

//static folder where css and other content are stored and available
app.use('/public', express.static(process.cwd() + '/public'));

//home page, sends /views/index.html
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

//routes to /api and then the UserInput module handles the post data
app.use('/api', UserInput);

//redirect client to url that corresponds with number
app.get('/api/shorturl/:id', function (req, res) {

  var num = req.params.id;
  var patt = new RegExp(/[a-z]/g);

  if (!patt.test(num)) {
    URLModel.findOne({
      id: num
    }, function (err, data) {
      if (err) {
        console.err(err)
      } else {
        res.redirect(data.urlAddress)
      }
    })
  } else {
    res.json({
      error: "Invalid url"
    })
  }
})


//the server is running
app.listen(port, () => console.log("It's listening"))