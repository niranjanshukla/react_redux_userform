var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    demo: './form.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'form.js'
  },
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      }
    ]
  }
};
