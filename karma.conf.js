const webpack = require('webpack');
const path = require('path');

module.exports = function(config) {
  config.set({
    basePath: '',
    frameworks: ['tap'],
    files: [
      './tests/stateengine/unit/actions.test.js'
    ],
    exclude: [
    ],
    preprocessors: {
     './tests/stateengine/unit/actions.test.js': ['webpack', 'sourcemap']
    },
    webpack: {
      devtool: 'inline-source-map',
      node: {
        fs: 'empty'
      },
      module: {
        rules: [{
          test: /\.js$/,
          loader: 'babel-loader',
          query: {
            presets: ['es2015', 'env']
          },
          exclude: path.join(__dirname, 'node_modules')
        }]
      }
    },
    reporters: ['dots'],
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['PhantomJS'],
    singleRun: true
  });
};
