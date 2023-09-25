const { addNums } = require('../example');

describe('addNums', () => {
    it('should return the sum of two numbers', () => {
        const result = addNums(1, 3);
        expect(result).toBe(4);
    })
})