var path = require('path');
var webpack = require('webpack');

module.exports = {
  context: __dirname,
  entry: {
    userform: './userform.js'
  },
  output: {
    path: path.resolve('./dist'),
    filename: 'userform.js'
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
