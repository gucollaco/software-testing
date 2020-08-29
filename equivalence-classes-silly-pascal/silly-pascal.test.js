const { isValid }  = require('./silly-pascal')

describe('Silly pascal input validator tests', function() {
    test('Input that doesnt start with a letter', function() { expect(isValid("9567")).toBe(false) })
    test('Input that contains a special character', function() { expect(isValid("ab*12")).toBe(false) })
    test('Input with length equals to 0', function() { expect(isValid("")).toBe(false) })
    test('Input with null value', function() { expect(isValid(null)).toBe(false) })
    test('Input with length greater than 6', function() { expect(isValid("aabb112233")).toBe(false) })
    test('Input with length greater than 6, on the limit (equals to 7)', function() { expect(isValid("z777777")).toBe(false) })
    test('Input matching conditions', function() { expect(isValid("zyx76")).toBe(true) })
    test('Input matching conditions, with length equals to 1', function() { expect(isValid("g")).toBe(true) })
    test('Input matching conditions, with length equals to 6', function() { expect(isValid("zyc321")).toBe(true) })
})
