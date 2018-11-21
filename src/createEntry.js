var URLModel = require('./urlmodel');

console.log("createEntry is running")

//create an entry in the database
var createURLEntry = function (url) {
  
 var newEntry = new URLModel({
    urlAddress: url
  });
 

/*   newEntry.save(function (err, data) {
    if (err) {
      return console.error(err);
    } else {
      console.log("Success! Entry added!")
      return passit(data)
    }
  }).update(); */



/*   var passit = function (data) {
    var num = data.id.toString();
    var shrtURL = "https://test.com/" + num;
    console.log(num);
    console.log(typeof num);
    var shortEntry = new URLModel({
      short_url: shrtURL
    });
    console.log(shrtURL);

    shortEntry.save(function (err, data) {
      if (err) {
        return console.error(err);
      } else {
        console.log("Success 2! Entry added!")
        return data;
      }
    }) */


  /*     var findUser = function(data) {
        newEntry.save(function(err, data){
          if (err){
            return console.error(err);
          } else {
            var shortened = "https://test.com/ " + data.id
            return shortened;
          }
        }) */
/* 
  urlSchema.schema.pre('save', function () {
    console.log("yessss")
    return findUser().
    then(() => saveThis())
  })

 */


}

module.exports = {
  createURLEntry: createURLEntry
}