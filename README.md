# Simple Node Crawler
Quickly grab all links off a site used for 301 Redirects

## How To
1. Download Repo
2. Run `npm install` or `yarn install` to get all the node things you need
3. Edit the index.js:4 to make the URL your base url.
4. Run the script by running `node index.js`
5. You will know it's done once it stops outputting things to the console for 30 seconds or more
6. In the `paths.txt` you will have all the links you need

## How It Works
This will follow every url in the html of the site and put that in the `paths.txt`. It will then go to that page, and see do the same up to 3 deep. This can be changed by editing the maxDepth in the `index.js`.
