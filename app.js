require('dotenv').config()
const express = require('express')
const app = express()
const port = 3000
const bodyParser = require('body-parser')
const mongoose = require('mongoose');
var cors = require('cors');
var schema = mongoose.Schema;

app.use(cors());

app.use(bodyParser.urlencoded({extended: false}));

app.use('/public', express.static(process.cwd() + '/public'));

app.get('/', function(req, res){
  res.sendFile(process.cwd() + '/views/index.html');
});

app.post('/api/shorturl/new', function(req, res){
    userUrl = req.body.url;
    console.log(userUrl);
})

mongoose.connect(process.env.MONGO_URI,  { useNewUrlParser: true }); 

var db = mongoose.connection;

db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    
});
 










app.listen(port, () => console.log("It's listening"))