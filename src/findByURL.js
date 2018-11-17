var urlModel = require('./urlmodel');

var promise = urlModel.findOne(url).exec();

promise.then(function(user){
  return user;
})
.catch(function(err){
  console.log('error: ', err);
})

module.exports = {
  findByURL: findByURL
}

/* var findByURL = function (url) {
    urlModel.find({
      urlAddress: url
    })
    .then(doc => {
      return doc
    })
    .catch(err => {
      console.error(err)
    })
  } */


/* var promise = User.findById('123').exec();

promise.then(function(user) {
  user.name = 'Robert Paulson';

  return user.save(); // returns a promise
})
.then(function(user) {
  console.log('updated user: ' + user.name);
  // do something with updated user
})
.catch(function(err){
  // just need one of these
  console.log('error:', err);
}); */