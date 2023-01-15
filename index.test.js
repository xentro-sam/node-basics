const {isPrime, isArmstrong} = require('./index')

test('11 should return "true"', () => {
    expect(isPrime(11)).toBe(true)
})

test('12 should return "false"', () => {
    expect(isPrime(12)).toBe(false)
})


test('371 should return "true"', () => {
    expect(isArmstrong(371)).toBe(true)
})

test('112 should return "false"', () => {
    expect(isPrime(112)).toBe(false)
})