const fs = require('fs');

function readNumberCustom(filename) {
  return new Promise((resolve, reject) => {
    fs.readFile(`./${filename}`, 'utf8', (err, data) => {
      if(err) {
        reject(err);
      }
      else if(!Number.isInteger(Number(data))) {
        reject('Given file doesn\'t have a number');
      }
      else {
        resolve(Number(data));
      }
    });
  });
}

async function caller() {
  try {
    let response = await Promise.all([readNumberCustom('numberFile1.txt'), readNumberCustom('numberFile2.txt'), readNumberCustom('numberFile3.txt'), readNumberCustom('numberFile4.txt'), readNumberCustom('numberFile5.txt')]);
    let result = response.reduce((acc, value) => acc * value, 1);
    console.log(result);
  }
  catch(err) {
    console.log(err);
  }
}

caller();