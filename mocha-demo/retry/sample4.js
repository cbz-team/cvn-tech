var assert = require('assert');
describe('parent describe', function() {
    this.retries(1);
    it('retry test case out site', function() {
        console.log('run TEST CASE outside');
        assert.equal(0, -1);
    });
    describe('child describe', function() {
        this.retries(2);
        before(function() {
            console.log('run BEFORE');
        });

        beforeEach(function() {
            console.log('run BEFORE EACH');
        });

        it('retry test case inside', function() {
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
});
