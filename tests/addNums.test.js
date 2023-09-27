const { addNums, subtract } = require('../example');

describe('addNums', () => {
    it('should return the sum of two numbers', () => {
        const result = addNums(1, 3);
        expect(result).toBe(4);
    })
})

describe('subtract', () => {
    it('should return the sum of two numbers', () => {
        const result = subtract(5, 2);
        expect(result).toBe(3);
    })
})