let mathEnforcer = require("../04.MathEnforcer").mathEnforcer
let expect = require("chai").expect
let assert = require('chai').assert

describe("mathEnforcer", function () {
    describe("addFive", function () {
        it("with non-number parameter should return undefined",function () {
            expect(mathEnforcer.addFive('pesho')).to.be.equal(undefined)
        })
        it("with number 5 should return 10",function () {
            expect(mathEnforcer.addFive(5)).to.be.equal(10)
        })
        it("with object as parameter should return undefined",function () {
            expect(mathEnforcer.addFive({name:'pesho'})).to.be.equal(undefined)
        })
        it("with floating-point number 5.04 should return around 10.04",function () {
            assert.closeTo(mathEnforcer.addFive(5.04),10.04,0.01)
        })
        it("with negative floating-point number -5.04 should return around -0.04",function () {
            assert.closeTo(mathEnforcer.addFive(-5.04),-0.04,0.01)
        })
        it("with negative floating-point number -3.04 should return around 1.96",function () {
            assert.closeTo(mathEnforcer.addFive(-3.04),1.96,0.01)
        })
    })

    describe("subtractTen", function () {
        it("with non-number parameter should return undefined",function () {
            expect(mathEnforcer.subtractTen('pesho')).to.be.equal(undefined)
        })
        it("with number parameter 5 should return -5",function () {
            expect(mathEnforcer.subtractTen(5)).to.be.equal(-5)
        })
        it("with number parameter 15 should return 5",function () {
            expect(mathEnforcer.subtractTen(15)).to.be.equal(5)
        })
        it("with object as parameter should return undefined",function () {
            expect(mathEnforcer.subtractTen({name:'pesho'})).to.be.equal(undefined)
        })
        it("with floating-point number 5.04 should return around -4.96",function () {
            assert.closeTo(mathEnforcer.subtractTen(5.04),-4.96,0.01)
        })
        it("with negative floating-point number -5.04 should return around -15.04",function () {
            assert.closeTo(mathEnforcer.subtractTen(-5.04),-15.04,0.01)
        })
        it("with number parameter 12.04 should return around 2.04",function () {
            assert.closeTo(mathEnforcer.subtractTen(12.04),2.04,0.01)
        })
    })

    describe("sum", function () {
        it("with first non-number parameter should return undefined",function () {
            expect(mathEnforcer.sum('pesho', 5)).to.be.equal(undefined)
        })
        it("with second non-number parameter should return undefined",function () {
            expect(mathEnforcer.sum(5,'pesho')).to.be.equal(undefined)
        })
        it("with both number parameters 15 and 13 should return 28",function () {
            expect(mathEnforcer.sum(15,13)).to.be.equal(28)
        })
        it("with positive first number 15 and negative second number -13 should return 2",function () {
            expect(mathEnforcer.sum(15,-13)).to.be.equal(2)
        })
        it("with both negative numbers -3 and -5 should return -8",function () {
            expect(mathEnforcer.sum(-3,-5)).to.be.equal(-8)
        })
        it("with object as first parameter should return undefined",function () {
            expect(mathEnforcer.sum({name:'pesho'},5)).to.be.equal(undefined)
        })
        it("with object as second parameter should return undefined",function () {
            expect(mathEnforcer.sum(5,{name:'pesho'})).to.be.equal(undefined)
        })
        it("with floating-point first parameter 12.04 and second number 5 should return around 17.04",function () {
            assert.closeTo(mathEnforcer.sum(12.04,5),17.04,0.01)
        })
        it("with both floating-point numbers 12.04 and 5.12 should return around 17.16",function () {
            assert.closeTo(mathEnforcer.sum(12.04,5.12),17.16,0.01)
        })
        it("with first negative floating-point number -12.24 and second positive 5.12 should return around -7.12",function () {
            assert.closeTo(mathEnforcer.sum(-12.24,5.12),-7.12,0.01)
        })
        it("with both negative floating-point numbers -12.24 and -5.12 should return around -17.36",function () {
            assert.closeTo(mathEnforcer.sum(-12.24,-5.12),-17.36,0.01)
        })
    })
})