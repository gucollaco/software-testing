const { isInteger, isArray }  = require('lodash')
const fibo  = require('./fibo')

describe('Fibonacci generator lib tests', function() {
    test('Check if an array is returned', function() {
        const fiboArray = fibo(6)
        expect(isArray(fiboArray)).toBe(true)
    })
    test('Assert the parameter given is an integer', function() {
        const executeFiboString = () => fibo('3')
        const executeFiboFloat = () => fibo(3.5)
        expect(executeFiboString).toThrowError(/Parameter must be an integer/)
        expect(executeFiboFloat).toThrowError(/Parameter must be an integer/)
    })
    test('Assert the parameter given is greater than 0', function() {
        const executeFiboZero = () => fibo(0)
        const executeFiboNegative = () => fibo(-2)
        expect(executeFiboZero).toThrowError(/Parameter must be greater than 0/)
        expect(executeFiboNegative).toThrowError(/Parameter must be greater than 0/)
    })
    test('Return default value [0] in case param equals to 1', function() {
        const fiboArray = fibo(1)
        expect(fiboArray).toEqual([0])
    })
    test('Assert the returned array has only integer values', function() {
        const fiboArray = fibo(5)
        for (const value of fiboArray) expect(isInteger(value)).toBe(true)
    })
    test('Should return [0, 1, 1, 2, 3] when param equals to 5', function() {
        const fiboArray = fibo(5)
        expect(fiboArray).toEqual([0, 1, 1, 2, 3])
    })
    test('Should return [0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55] when param equals to 11', function() {
        const fiboArray = fibo(11)
        expect(fiboArray).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
    })
})
