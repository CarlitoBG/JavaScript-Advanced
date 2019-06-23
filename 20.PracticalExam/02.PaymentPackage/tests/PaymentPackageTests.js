const PaymentPackage = require('../PaymentPackage')
const expect = require('chai').expect

describe("Payment Package Tests", function() {
    let paymentPackage
    beforeEach(function () {
        paymentPackage = new PaymentPackage('HR Services', 1500)
    })

    it("It could be instantiated with two valid parameters", function() {
        expect(paymentPackage.name).to.be.equal('HR Services')
        expect(paymentPackage.value).to.be.equal(1500)
        expect(paymentPackage.VAT).to.be.equal(20)
        expect(paymentPackage.active).to.be.equal(true)
    });

    it("Should throw error with empty name", function() {
        expect(() => {new PaymentPackage('', 1500)}).to.throw('Name must be a non-empty string')
    });

    it("Should throw error with non-string name", function() {
        expect(() => {new PaymentPackage(1, 1500)}).to.throw('Name must be a non-empty string')
    });

    it("Should throw error with non-number value", function() {
        expect(() => {new PaymentPackage('HR Services', '1500')}).to.throw('Value must be a non-negative number')
    });

    it("Should throw error with negative number value", function() {
        expect(() => {new PaymentPackage('HR Services', -1500)}).to.throw('Value must be a non-negative number')
    });

    it("Should show correct result '0' with border 0 value as param", function() {
        paymentPackage = new PaymentPackage('HR Services', 0)
        expect(paymentPackage.value).to.be.equal(0)
    });

    it("Should throw error with non-number VAT value", function() {
        expect(() => {paymentPackage.VAT = '30'}).to.throw('VAT must be a non-negative number')
    });

    it("Should throw error with negative number VAT value", function() {
        expect(() => {paymentPackage.VAT = -30}).to.throw('VAT must be a non-negative number')
    });

    it("Should show correct result '0' with border 0 VAT as param", function() {
        paymentPackage.VAT = 0
        expect(paymentPackage.VAT).to.be.equal(0)
    });

    it("Should throw error with non-boolean active setter", function() {
        expect(() => {paymentPackage.active = 30}).to.throw('Active status must be a boolean')
    });

    it("Function toString() should return correct message with active status", function() {
        let message = 'Package: HR Services\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800'
        expect(paymentPackage.toString()).to.be.equal(message)
    });

    it("Function toString() should return correct message with not active status", function() {
        paymentPackage.active = false
        let message = 'Package: HR Services (inactive)\n- Value (excl. VAT): 1500\n- Value (VAT 20%): 1800'
        expect(paymentPackage.toString()).to.be.equal(message)
    });
});