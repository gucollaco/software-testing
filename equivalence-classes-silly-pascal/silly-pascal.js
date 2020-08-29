const isValid = (input) => {
    if (input === null) return false
    if (input.length < 1 || input.length > 6) return false
    if (!(/^[a-zA-Z]+$/).test(input.charAt(0)) || !(/^[0-9a-zA-Z]+$/).test(input)) return false

    return true
}

module.exports = { isValid }
