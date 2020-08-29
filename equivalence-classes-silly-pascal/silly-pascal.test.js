const { isValid }  = require('./silly-pascal')

describe('Silly pascal input validator tests', function() {
    test('Input that doesnt start with a letter', function() { expect(isValid("9567")).toBe(false) })
    test('Input that contains a special character', function() { expect(isValid("ab*12")).toBe(false) })
    test('Input with length equals to 0', function() { expect(isValid("")).toBe(false) })
    test('Input with null value', function() { expect(isValid(null)).toBe(false) })
    test('Input with length greater than 6', function() {
        const input = "aabb112233"
        expect(input.length).toBeGreaterThan(6)
        expect(isValid(input)).toBe(false)
    })
    test('Input with length greater than 6, on the limit (equals to 7)', function() {
        const input = "z777777"
        expect(input.length).toBe(7)
        expect(isValid(input)).toBe(false)
    })
    test('Input matching conditions', function() { expect(isValid("zyx76")).toBe(true) })
    test('Input matching conditions, with length equals to 1', function() {
        const input = "g"
        expect(input.length).toBe(1)
        expect(isValid(input)).toBe(true)
    })
    test('Input matching conditions, with length equals to 6', function() {
        const input = "zyc321"
        expect(input.length).toBe(6)
        expect(isValid(input)).toBe(true)
    })
})
