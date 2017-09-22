// solves `SyntaxError: Unexpected token import`
require("babel-register")({
    presets: [ 'es2015' ]
});

exports.config = {
    allScriptsTimeout: 90000,
    directConnect: true,

    specs: ['test/*.js'],
    baseUrl: 'http://crunchinator.com/',
    framework: 'jasmine',

    onPrepare: () => {
        browser.manage().window().setSize(1024, 800);
        
        const SpecReporter = require('jasmine-spec-reporter');
        jasmine.getEnv().addReporter(new SpecReporter({displayStacktrace: 'specs'}));
    },

    capabilities: {
        browserName: 'chrome'
    },

    jasmineNodeOpts: {
        showColors: true,
        displaySpecDuration: true,
        print: () => {},
        defaultTimeoutInterval: 50000
    }
};