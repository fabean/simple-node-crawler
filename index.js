var Crawler = require("simplecrawler");
var fs = require('fs');

Crawler.interval = 100;

Crawler.crawl("http://www.ymcagreenville.org", function(queueItem) {

  fs.appendFile("paths.txt", queueItem.url + "\n", function(err) {
    if(err) {
        return console.log(err);
    }
  }); 
  
  console.log("Completed fetching resource:", queueItem.url);
});
