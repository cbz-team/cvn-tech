var assert = require('assert');
describe('Retry test', function() {

    before(function() {
        console.log('run BEFORE');
    });

    beforeEach(function() {
        console.log('run BEFORE EACH');
    });

    it('retry test case', function() {
        this.retries(1);
        console.log('run TEST CASE');
        assert.equal(0, -1);
    });

    afterEach(function() {
        console.log('run AFTER EACH');
    });

    after(function() {
        console.log('run AFTER');
    });
});
