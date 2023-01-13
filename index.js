const prompt = require("prompt-sync")();

function prime(num) {
    let cnt = 0
    for(let i = 0; i <= num; i++) {
        if(num % i === 0) {
            cnt++
        }
    }
    if(cnt === 2) {
        return true
    }
    return false
}
function armstrong(num) {
    let nNum = 0;
    for(let i = num; i > 0; i /= 10) {
        let dig = i % 10;
        nNum += dig * dig * dig;
    }
    if(nNum === num) {
        return true
    }
    return false
}

let input = prompt('Enter a number ', '0')
input = Number(input)
if(prime(input) === true) {
    console.log('The number is a prime')
}
else {
    console.log('The number is not a prime')
}
if(armstrong(input) === true) {
    console.log('The number is an armstrong')
}
else {
    console.log('The number is not an armstrong')
}