const fibo  = require('./fibo')

describe('Fibonacci generator lib tests', function() {
    test('Check if an array is returned', function() {
        const fiboArray = fibo(6)
        expect(Array.isArray(fiboArray)).toBe(true)
    })
    test('Assert the parameter given is an integer', function() {
        const executeFiboString = () => fibo('3')
        const executeFiboFloat = () => fibo(3.5)
        expect(executeFiboString).toThrowError(/Parameter must be an integer/)
        expect(executeFiboFloat).toThrowError(/Parameter must be an integer/)
    })
})
