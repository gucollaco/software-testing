describe('First example - switching the order would cause a failure', function() {
    const db = [] // considerando como se fossem dados de uma tabela do banco de dados
    test('Inserts a result into the database table', function() {
        db.push('First data')
        expect(db.length).toEqual(1)
    })
    test('Confirms that database table has more than one result', function() {
        expect(db.length).toBeGreaterThan(0)
    })
})

describe('Second example - switching the order would cause a failure', function() {
    const db = [5] // considerando como se fossem dados de uma tabela do banco de dados
    test('Removes a result from the database table', function() {
        const element = db.shift(db)
        expect(element).toEqual(5)
    })
    test('Confirms that database has 0 elements', function() {
        expect(db.length).toEqual(0)
    })
})

describe('Third example - tests not isolated', function() {
    const dbTable1 = [1, 2, 3] // considerando como se fossem dados de uma tabela do banco de dados
    const dbTable2 = ['a', 'b', 'c'] // considerando como se fossem dados de uma tabela do banco de dados
    test('Checks if database table one has only number values and if database table two has only letters', function() {
        for (const val of dbTable1) {
            expect(val).toEqual(expect.any(Number))
        }
        for (const val of dbTable2) {
            expect(typeof val).toBe('string');
            
        }
    })
})

describe('Fourth example - unnecessary test', function() {
    test('Checks if 0 is a number', function() {
        expect(0).toEqual(expect.any(Number))
    })
})
