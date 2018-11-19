require('dotenv').config();
const express = require('express');
const app = express();
const port = 3000;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const UserInput = require('./src/userinput');
const { removeMany } = require('./src/removeMany');


//connect to database
 mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true }).then(
  () => {console.log('Database is connected') },
  err => { console.log('Can not connect to the database'+ err)}
);
mongoose.set('useCreateIndex', true); 
//removeMany(0);


/* //drop db
mongoose.connect(process.env.MONGO_URI);
mongoose.set('debug', true);
mongoose.connection.dropDatabase(error => {
  console.log(error);
  process.exit(0);
}); */


app.use(bodyParser.json())
app.use(bodyParser.urlencoded({
  extended: false
}));

//static folder where css and other content are stored and available
app.use('/public', express.static(process.cwd() + '/public'));

//home page, sends /views/index.html
app.get('/', function (req, res) {
  res.sendFile(process.cwd() + '/views/index.html');
});

//routes to /api and then the UserInput module handles the post data
app.use('/api', UserInput);

//the server is running
app.listen(port, () => console.log("It's listening"))