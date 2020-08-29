const isValid = (input) => {
    if (input === null) return false
    if (input.length < 1 || input.length > 6) return false
    if (!(/^[a-zA-Z]+$/).test(identifier.charAt(0)) || !(/^[0-9a-zA-Z]+$/).test(identifier)) return false

    return true
}

module.exports = isValid
