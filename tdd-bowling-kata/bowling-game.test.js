const { BowlingGame }  = require('./bowling-game')

const rounds = 20;

const rollRounds = (pins) => { for (let i = 0; i < rounds; i++) bg.roll(pins) }


describe('Bowling game tests', function() {
    let bg = null

    beforeAll(function() {
        bg = new BowlingGame()
    })

    test('Should return 0 points, when we have a gutter ball', function() {
        rollRounds(0)
        expect(bg.score).toBe(0)
    })

    test('Should score 20 points, when we have only ones game', function() {
        rollRounds(1)
        expect(bg.score).toBe(20)
    })
})
