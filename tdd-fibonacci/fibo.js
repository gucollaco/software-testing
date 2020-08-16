const fibo = (length, currentArray = [0, 1]) => {
    if (!(typeof length === 'number' && (length % 1) === 0)) throw new Error('Parameter must be an integer')

    if (length === currentArray.length) return currentArray

    const newArray = [...currentArray, 0]

    return fibo(length, newArray)
}

module.exports = fibo
