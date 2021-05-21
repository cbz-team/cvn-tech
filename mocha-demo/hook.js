// test/hooks.js

exports.mochaHooks = {
    beforeEach(done) {
        // do something before every test
        console.log('root hook');
        done();
    }
};
