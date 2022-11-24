const fs = require('fs');
const readline = require('readline');
const request = require('request');

// Using readline to create a more interactive envrionment to ask questions and receive responses
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question('Please enter a URL   ', (url) => {
  rl.question('Please enter a local file path to download the resource on ', (filePath) => {
    //With the user responses we will initialize an HTTP request and download the body to file on provided local path/
    request(url, (error, response, body) => {
      fs.writeFile(filePath, body, err => {
        if (!err) {
          console.error(`Downloaded and saved ${body.length} bytes to ${filePath}`);
        }
      });
    });

    rl.close();
  });
});

