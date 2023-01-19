const { count } = require('console');
const fs = require('fs');

function readNumberCustom(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${filename}`, 'utf8', (err, data) => {
      if(err) {
        reject(err);
      }
      else if(Number.isInteger(Number(data))) {
        reject('Given file doesn\'t have a number')
      }
      else {
        resolve(Number(data));
      }
    });
  });
}

let result = 1;

readNumberCustom('numberFile1.txt')
.then(num1 => {
    result *= num1;
    return readNumberCustom('numberFile2.txt')
})
.then(num2 => {
    result *= num2;
    return readNumberCustom('numberFile3.txt')
})
.then(num3 => {
    result *= num3;
    return readNumberCustom('numberFile4.txt')
})
.then(num4 => {
    result *= num4;
    return readNumberCustom('numberFile5.txt')
})
.then(num5 => {
    result *= num5
    console.log(result)
})
.catch(err => console.log(err))