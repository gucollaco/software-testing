const { calculate }  = require('./income-tax')

describe('Income tax calculator tests', function() {
    test('Salary less than or equal 1000', function() {
        expect(calculate(950.0)).toEqual(0.0)
    })
    test('Salary between 1000 and 2000', function() {
        expect(calculate(1050.0)).toBeGreaterThan(0.0)
    })
    test('Salary greater than 2000', function() {
        expect(calculate(2500.0)).toBeGreaterThan(150.0)
    })
    test('Salary greater than 3000', function() {
        expect(calculate(5000.0)).toBeGreaterThan(150.0)
    })
})