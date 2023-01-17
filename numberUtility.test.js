const {divide} = require('./numberUtility')

describe('Number Utility', () => {
    describe('Divide Operation', () => {
        it('should throw an error if divisor is 0', () => {
            expect(() => divide(2, 0)).toThrow(Error)
        })
        it('should returnn 2 on dividing 8 by 4', () => {
            expect(divide(8, 4)).toEqual(2)
        })
    })
})