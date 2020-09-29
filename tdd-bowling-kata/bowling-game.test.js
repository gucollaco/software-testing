const { BowlingGame }  = require('./bowling-game')

const rollRounds = (rounds, pins) => { for (let i = 0; i < rounds; i++) bg.roll(pins) }

const rollRounds = (pins) => { for (let i = 0; i < rounds; i++) bg.roll(pins) }


describe('Bowling game tests', function() {
    let bg = null

    beforeAll(function() { bg = new BowlingGame() })

    test('Should return 0 points, when we have a gutter ball', function() {
        rollRounds(20, 0)
        expect(bg.score).toBe(0)
    })

    test('Should score 20 points, when we have only ones game', function() {
        rollRounds(20, 1)
        expect(bg.score).toBe(20)
    })

    test('Should score 16 for a spare followed by a 3 points ball', () => {
        rollSpare()
        bg.roll(3)
        expect(bg.score()).toBe(16)
    })

    test('Should score 24 for a strike followed by a 3 and a 4 points ball', () => {
        rollStrike()
        g.roll(3)
        g.roll(4)
        rollMany(16, 0)
        expect(g.score()).toBe(24)
    })

    test('Should score 300 for perfect game', () => {
        rollMany(12, 10)
        expect(g.score()).toBe(300)
    })

})
