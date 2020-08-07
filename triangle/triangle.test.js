const { triangle }  = require('./triangle')

describe('Triangle tests', function() {
    test('Check if triangle is invalid', function() {
        const tri = new triangle(5, 1, -2)
        expect(tri.classify()).toEqual('invalid')
    })

    test('Check if triangle is not invalid', function() {
        const tri = new triangle(5, 1, 3)
        expect(tri.classify()).not.toEqual('invalid')
    })

    test('Check if equilateral triangle returns equilateral', function() {
        const tri = new triangle(5, 5, 5)
        expect(tri.classify()).toEqual('equilateral')
    })

    test('Check if equilateral triangle doesnt return isosceles nor scalene', function() {
        const tri = new triangle(5, 5, 5)
        expect(tri.classify()).not.toEqual('isosceles')
        expect(tri.classify()).not.toEqual('scalene')
    })

    test('Check if isosceles triangle returns isosceles', function() {
        const tri = new triangle(2, 2, 1)
        expect(tri.classify()).toEqual('isosceles')
    })

    test('Check if isosceles triangle doesnt return scalene nor equilateral', function() {
        const tri = new triangle(2, 2, 1)
        expect(tri.classify()).not.toEqual('scalene')
        expect(tri.classify()).not.toEqual('equilateral')
    })

    test('Check if scalene triangle returns scalene', function() {
        const tri = new triangle(3, 2, 1)
        expect(tri.classify()).toEqual('scalene')
    })

    test('Check if scalene triangle doesnt return equilateral nor isosceles', function() {
        const tri = new triangle(3, 2, 1)
        expect(tri.classify()).not.toEqual('equilateral')
        expect(tri.classify()).not.toEqual('isosceles')
    })
})
