
var webpack = require('webpack');
var webpackConf = require('./webpack.make')({debug: true});
delete webpackConf.entry;

module.exports = function(config) {
    config.set({
        // base path, that will be used to resolve files and exclude
        //basePath: '.',
        // frameworks to use
        frameworks: ['mocha','chai'],

        // list of files / patterns to load in the browser
        files: ['src/test/**/*.test.js'],

        // list of preprocessors
        preprocessors: {
            'src/test/**/*.test.js': ['webpack']
        },

        webpack: webpackConf,

        webpackMiddleware: {
            stats: {
                colors: true,
                chunks: false
            }
        },

        // test results reporter to use
        // possible values: 'dots', 'progress', 'junit', 'growl', 'coverage'
        reporters: ['spec'],

        // web server port
        port: 9876,

        // enable / disable colors in the output (reporters and logs)
        colors: true,

        // level of logging
        // possible values: config.LOG_DISABLE || config.LOG_ERROR || config.LOG_WARN || config.LOG_INFO || config.LOG_DEBUG
        logLevel: config.LOG_INFO,


        // enable / disable watching file and executing tests whenever any file changes
        autoWatch: true,

        // Start these browsers, currently available:
        // - Chrome
        // - ChromeCanary
        // - Firefox
        // - Opera (has to be installed with `npm install karma-opera-launcher`)
        // - Safari (only Mac; has to be installed with `npm install karma-safari-launcher`)
        // - PhantomJS
        // - IE (only Windows; has to be installed with `npm install karma-ie-launcher`)
        browsers: ['Chrome'],

        // If browser does not capture in given timeout [ms], kill it
        captureTimeout: 60000,

        // Continuous Integration mode
        // if true, it capture browsers, run tests and exit
        singleRun: true,

        // List plugins explicitly, since autoloading karma-webpack
        // won't work here
        plugins: [
            require("karma-webpack"),
            require("karma-mocha"),
            require("karma-chai"),
            require("karma-spec-reporter"),
            require("karma-chrome-launcher"),
            require("karma-phantomjs-launcher")
        ]
    });
};