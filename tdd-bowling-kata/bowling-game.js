class BowlingGame {
    constructor(rolls=Array.from(Array(20), () => 0), score=0, curRoll=0) {
        this.rolls = rolls
        this.score = score
        this.curRoll = curRoll
    }

    getScore() {
        let score = 0
        let index = 0

        for (let frame = 0; frame < 10; frame++) {
          if (this.isStrike(index)) {
            score += 10 + this.strikeBonus(index)
            index++
          } else if (this.isSpare(index)) {
            score += 10 + this.spareBonus(index)
            index += 2
          } else {
            score += this.frameSum(index)
            index += 2
          }
        }

        return score
    }

    roll(pins) { this.rolls[this.curRoll++] = pins }

    frameSum(index) {return this.rolls[index] + this.rolls[index + 1] }

    strikeBonus(index) { return this.rolls[index + 1] + this.rolls[index + 2] }

    spareBonus(index) { return this.rolls[index + 2] }

    isStrike(index) { return this.rolls[index] === 10 }
    
    isSpare(index) { return this.rolls[index] + this.rolls[index + 1] === 10 }

    rollRounds(rounds, pins) { for (let i = 0; i < rounds; i++) this.roll(pins) }

    rollStrike() { this.roll(10) }

    rollSpare() {
        this.roll(4)
        this.roll(6)
    }
}

module.exports = { BowlingGame }
