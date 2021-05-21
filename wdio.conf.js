exports.config = {
    // runner: 'local',
    // services: ['selenium-standalone'],
    // host: 'localhost',
    // port: 4444,
    //path: '/wd/hub',
    baseUrl: '',
    logLevel: 'info',
    framework: 'mocha',
    mochaOpts: {
        ui: 'bdd',
        timeout: 900000,
        compilers: ['js:@babel/register'],
    },
    capabilities: [{
        browserName: 'chrome',
        'goog:chromeOptions': {
            args: ['--start-maximized', '--no-sandbox'],
        },
        maxInstances: 1,
    },
    ],
    specs: ['tests/*.spec.js'],
    sync: true,
    reporters: [
        'spec',
    ],
    before: () => {},
};
