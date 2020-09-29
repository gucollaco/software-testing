class BowlingGame {
    constructor(rolls=[], score=0, curRoll=0) {
        this.rolls = rolls
        this.scores = score
        this.curRoll = curRoll
    }

    score() {
    }

    roll(pins) {
        this.score += pins
        this.rolls[this.curRoll++] = pins
    }
}

module.exports = { BowlingGame }
