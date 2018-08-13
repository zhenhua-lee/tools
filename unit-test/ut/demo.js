// var expect = chai.expect;

var expect = require('chai').expect;
var add = require('../../src/demo')
describe('add', function () {
    it('count 1 + 2', function () {
        expect(add(1, 2)).to.equal(3)
    })

    it('count 1 + 3', function () {
        expect(add(1, 3)).to.equal(4)
    })

})