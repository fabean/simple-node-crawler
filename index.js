const Crawler = require('simplecrawler');
const fs = require('fs');


let myCrawler = new Crawler('http://yoursite.com/');
myCrawler.interval = 5000;
myCrawler.maxConcurrency = 2;
myCrawler.maxDepth = 3;

myCrawler.on('queueadd', function(queueItem, responseBuffer, response) {

  console.log('we grabbed page:', queueItem.url);
  fs.appendFile('paths.txt', queueItem.url + "\n", (err) => {
    if(err) {
        return console.log(err);
    }
  });
});

myCrawler.start();


