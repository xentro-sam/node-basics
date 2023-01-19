const fs = require('fs');

function readFileCustom(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${filename}`, 'utf8', (err, data) => {
      if(err) {
        reject(err);
      }
      else if(filename === 'sampleFile.txt') {
        reject('Error message');
      }
      else {
        resolve(data);
      }
    });
  });
}

  readFileCustom('sampleFile.txt')
  .then( val => {
    console.log(val);
    return readFileCustom('sampleFile2.txt');
  })
  .catch(err => {
    console.log(err);
    return 'Sample string';
  })
  .then(val2 => {
    console.log(val2);
    return readFileCustom('sampleFile3.txt');
  })
  .then(val3 => console.log(val3))
  .then(val4 => {
    console.log(val4);
    console.log('Last Value');
  })

/*fs.readFile('./sampleFile.txt', 'utf8', (err, data) => {
  if(err) {
    console.log(err);
    return;
  }
  console.log(data);
  fs.readFile('./sampleFile2.txt', 'utf8', (err, data) => {
    if(err) {
      console.log(err);
      return;
    }
    console.log(data);
    fs.readFile('./sampleFile3.txt', 'utf8', (err, data) => {
      if(err) {
        console.log(err);
        return;
      }
      console.log(data);
    });
  });
});*/