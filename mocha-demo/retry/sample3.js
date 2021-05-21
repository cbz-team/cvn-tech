var assert = require('assert');
describe('Retry test', function() {
    this.retries(2);
    before(function() {
        console.log('run BEFORE');
    });

    beforeEach(function() {
        console.log('run BEFORE EACH');
    });

    it('retry test case 1', function() {
        this.retries(2);
        console.log('run TEST CASE 1');
        assert.equal(0, -1);
    });

    it('retry test case 2', function() {
        console.log('run TEST CASE 2');
        assert.equal(0, -1);
    });

    afterEach(function() {
        console.log('run AFTER EACH');
    });

    after(function() {
        console.log('run AFTER');
    });
});
