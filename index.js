var Crawler = require("simplecrawler");
var fs = require('fs');


var myCrawler = new Crawler("www.ymcagreenville.org", '/', 80);

myCrawler.interval = 10000;
myCrawler.maxConcurrency = 1;
myCrawler.maxDepth = 2;

myCrawler.on("queueadd", function(queueItem, responseBuffer, response) {
  
  console.log('we grabbed page:', queueItem.url);
  fs.appendFile("paths.txt", queueItem.url + "\n", function(err) {
    if(err) {
        return console.log(err);
    }
  }); 
});

myCrawler.start();


