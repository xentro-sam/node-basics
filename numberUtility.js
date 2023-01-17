function divide(dividend, divisor) {
    if(divisor === 0) {
        throw new Error('Cannot divide by 0')
    }
    return dividend / divisor
}

module.exports = {divide}