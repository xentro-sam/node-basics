function isPrime(num) {
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

function isArmstrong(num) {
    let nNum = 0
    let original = num
    while(num > 0) {
        let digit = num % 10
        nNum = nNum + (digit ** 3)
        num /= 10
        num = Math.trunc(num)
    }
    if(nNum === original) {
        return true
    }
    return false
}

module.exports = {isPrime, isArmstrong}