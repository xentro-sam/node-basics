const fs = require('fs');

fs.readFile('./sampleFile.txt', 'utf8', (err, data) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log(data);
});