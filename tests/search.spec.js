const assert = require('chai').assert;

describe('Search by Google', () => {
    it('should search successfully', () => {
        // Step 1: go to home page
        browser.url(`https://google.com`);

        // Step 2: input keyword
        const searchKeyword = 'webdriverio';
        $('form input[type="text"]').setValue(searchKeyword);

        // Step 3: Press "Enter" key
        browser.keys('\uE007');

        // Step 4: verify the search result
        const pageTitle = browser.getTitle();
        assert.include(pageTitle, searchKeyword, 'The result is not matched');

        browser.pause(1000);
    });
});
