const fibo = (length, currentArray=[0,1]) => {
    if(length === currentArray.length) return currentArray

    const newArray = [...currentArray, 0]

    return fibo(length, newArray)
}

module.exports = fibo
