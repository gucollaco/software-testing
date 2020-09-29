const { BowlingGame }  = require('./bowling-game')

describe('Bowling game tests', function() {
    test('Should return 0 points, when we have a gutter ball', function() {
        const bg = new BowlingGame()
        bg.rollRounds(20, 0)
        expect(bg.getScore()).toBe(0)
    })

    test('Should score 20 points, when we have only ones game', function() {
        const bg = new BowlingGame()
        bg.rollRounds(20, 1)
        expect(bg.getScore()).toBe(20)
    })

    test('Should score 18 for a spare followed by a 4 points ball', function() {
        const bg = new BowlingGame()
        bg.rollSpare()
        bg.roll(4)
        expect(bg.getScore()).toBe(18)
    })

    test('Should score 28 for a strike followed by a 3 and a 6 points ball', function() {
        const bg = new BowlingGame()
        bg.rollStrike()
        bg.roll(3)
        bg.roll(6)
        expect(bg.getScore()).toBe(28)
    })

    test('Should score 300 for perfect game', function() {
        const bg = new BowlingGame()
        bg.rollRounds(12, 10)
        expect(bg.getScore()).toBe(300)
    })
})
