var webpackConfig = require('./webpack.config.js');

module.exports = function(config) {
  config.set({
    browsers: [ 'Chrome' ], // browser for tests to run in
    singleRun: true,
    frameworks: [ 'mocha' ],
    files: [
      'node_modules/jquery/dist/jquery.min.js',
      'node_modules/foundation-sites/dist/foundation.min.js',
      'app/tests/**/*.test.jsx'
    ],
    preprocessors: {
      'app/tests/**/*.test.jsx': ['webpack', 'sourcemap']
    },
    reporters: ['mocha'],
    client: {
      mocha: {
        timeout: '5000' // cancel after 5 seconds
      }
    },
    webpack: webpackConfig,
    webpackServer: {
      noInfo: true
    }
  });
};
