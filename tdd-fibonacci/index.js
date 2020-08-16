const fibo = require('./fibo')

console.log(fibo(6))
const fib = fibo(6)
for (const value of fib) console.log( value)