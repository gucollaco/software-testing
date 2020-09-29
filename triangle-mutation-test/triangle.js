class triangle {
    // sets as 0 in case no value is given
    constructor(a=0, b=0, c=0) {
        this.a = a
        this.b = b
        this.c = c
    }

    // returns the triangle type according to the sides given
    classify() {
        return  (this.a <= 0 || this.b <= 0 || this.c <= 0) && 'invalid' ||
                (this.a === this.b && this.a === this.c) && 'equilateral' ||
                (this.a === this.b || this.a === this.c || this.b === this.c) && 'isosceles' ||
                'scalene'
    }
}

module.exports = { triangle }
