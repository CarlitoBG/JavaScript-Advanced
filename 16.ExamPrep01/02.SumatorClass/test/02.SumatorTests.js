let expect = require('chai').expect
let Sumator = require('../02.SumatorClass')

describe('Sumator Unit Tests', function () {
    let sumator
    beforeEach(function () {
        sumator = new Sumator()
    })

    describe('Check if functions exist', function () {
        it('test if data is empty', function () {
            expect(sumator.data.length).to.be.equal(0)
        })

        it('data is not undefined', function () {
            expect(sumator.data !== undefined).to.be.equal(true)
        })

        it('add function exists', function () {
            expect(Sumator.prototype.hasOwnProperty('add')).to.be.equal(true)
        })

        it('sumNums function exists', function () {
            expect(Sumator.prototype.hasOwnProperty('sumNums')).to.be.equal(true)
        })

        it('removeByFilter function exists', function () {
            expect(Sumator.prototype.hasOwnProperty('removeByFilter')).to.be.equal(true)
        })

        it('toString function exists', function () {
            expect(Sumator.prototype.hasOwnProperty('toString')).to.be.equal(true)
        })
    })

    describe('Test add item', function () {
        it('add only numbers', function () {
            sumator.add(5)
            sumator.add(4)
            sumator.add(3)
            expect(sumator.data.join(', ')).to.be.equal('5, 4, 3')
        })

        it('add only strings', function () {
            sumator.add('Pesho')
            sumator.add('Gosho')
            sumator.add('Stamat')
            expect(sumator.data.join(', ')).to.be.equal('Pesho, Gosho, Stamat')
        })

        it('add only objects', function () {
            sumator.add({name: 'Pesho'})
            sumator.add({})
            expect(sumator.data.join(', ')).to.be.equal('[object Object], [object Object]')
        })

        it('add mixed types', function () {
            sumator.add({name: 'Pesho'})
            sumator.add(4)
            sumator.add('Stamat')
            expect(sumator.data.join(', ')).to.be.equal('[object Object], 4, Stamat')
        })
    })

    describe('Test sum nums', function () {
        it('sum only numbers', function () {
            sumator.add(5)
            sumator.add(4)
            sumator.add(3)
            expect(sumator.sumNums()).to.be.equal(12)
        })

        it('sum with no numbers', function () {
            sumator.add('Pesho')
            sumator.add({})
            sumator.add({name: 'Gosho'})
            expect(sumator.sumNums()).to.be.equal(0)
        })

        it('sum with some numbers and objects', function () {
            sumator.add('Pesho')
            sumator.add(3)
            sumator.add({name: 'Gosho'})
            sumator.add(4)
            expect(sumator.sumNums()).to.be.equal(7)
        })
    })

    describe('Test remove by filter', function () {
        it('remove all odd numbers', function () {
            for (let i = 0; i <= 10; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter(x => x % 2 !== 0)
            expect(sumator.data.join(', ')).to.be.equal('0, 2, 4, 6, 8, 10')
        })

        it('remove all numbers above 5', function () {
            for (let i = 0; i <= 5; i++) {
                sumator.add(i)
            }
            sumator.removeByFilter(x => x > 5)
            expect(sumator.data.join(', ')).to.be.equal('0, 1, 2, 3, 4, 5')
        })

        it('throws exception', function () {
            for (let i = 0; i < 5; i++) {
                sumator.add(i)
            }
            expect(() => sumator.removeByFilter(undefined)).to.throw()
        })
    })

    describe('Test toString() function', function () {
        it('with items in array', function () {
            sumator.add(4)
            sumator.add('Gosho')
            expect(sumator.toString()).to.be.equal('4, Gosho')
        })

        it('with no items', function () {
            expect(sumator.toString()).to.be.equal('(empty)')
        })
    })
})