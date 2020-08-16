const { isInteger, gt, isEqual }  = require('lodash')

const fibo = (length, currentArray = [0, 1]) => {
    if (!isInteger(length)) throw new Error('Parameter must be an integer')

    if (!gt(length, 0)) throw new Error('Parameter must be greater than 0')
    
    if (isEqual(length, 1)) return [0]

    if (isEqual(length, currentArray.length)) return currentArray

    const n2 = currentArray[currentArray.length - 2]
    const n1 = currentArray[currentArray.length - 1]
    const n = n1 + n2

    return fibo(length, [...currentArray, n])
}

module.exports = fibo
