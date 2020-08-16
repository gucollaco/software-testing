const fibo  = require('./fibo')

describe('Fibonacci generator lib tests', function() {
    test('Check if an array is returned', function() {
        const fiboArray = fibo(6)
        expect(Array.isArray(fiboArray)).toBe(true)
    })
})
