//convert from url to hostname http(s)://www.google.com -> google.com

function extractHostname(url){
    console.log('works')
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

module.exports = {
    extractHostname: extractHostname
}