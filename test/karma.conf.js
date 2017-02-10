var webpack = require('karma-webpack');
var webpackConfig = require('../webpack.config');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

webpackConfig.module.loaders = [
  {
    test: /\.(js|jsx)$/,
    loader: 'babel-loader'
  },
  {
    test: /\.less$/,
    loader: ExtractTextPlugin.extract("style-loader", "css-loader!less-loader")
  }
];

module.exports = function(config) {
  config.set({

    // base path that will be used to resolve all patterns (eg. files, exclude)
    basePath: '../',


    // frameworks to use
    // available frameworks: https://npmjs.org/browse/keyword/karma-adapter
    frameworks: ['jasmine'],


    // list of files / patterns to load in the browser
    files: [
      'test/mock/**/*_mock.js',
      'test/**/*_spec.js'
    ],
    plugins: [
      webpack, 
      'karma-jasmine',
      'karma-chrome-launcher',
      'karma-firefox-launcher',
      'karma-phantomjs-launcher',
      'karma-coverage',
      'karma-spec-reporter'
    ],
    browsers: [ 'PhantomJS' ],
    preprocessors: {
      'test/**/*_spec.js': ['webpack'],
      'src/**/*.js': ['webpack', 'coverage']
    },
    reporters: [ 'spec', 'coverage' ],
    coverageReporter: {
      dir: 'target/reports/coverage',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' },
        { type: 'cobertura', subdir: '.', file: 'cobertura.txt' }
      ]
    },
    webpack: webpackConfig,
    webpackMiddleware: { noInfo: true }
  });
};
