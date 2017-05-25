var path = require('path');
var webpack = require('webpack');
const CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
  context: __dirname,
  entry: [
    'bootstrap-loader',
    './src/userform.js'
  ],
  output: {
    path: path.resolve('./dist'),
    filename: 'views/bundle.js'
  },
  plugins: [
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery'
    }),
    new CopyWebpackPlugin([
      { from: 'index.js' },
      { from: 'src', to: 'views' }
  ])
  ],

  target: 'node',
  module: {
    loaders: [
      {
        test: /\.js?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['react', 'es2015']
        }
      },
      {
        test: /\.css$/,
        loader: 'css-loader',
        query: {
          modules: true,
          localIdentName: '[name]__[local]___[hash:base64:5]'
        }
      },
      { test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=/public/asset/[name].[ext]' },
      { test: /\.(ttf|otf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?|(jpe?g|png|gif)$/,
        loader: 'file-loader?name=/public/asset/[name].[ext]' },
      // jquery / bootstrap loader. This specifies how bootstrap files are bundled.
      { test: /\.(html)$/,
        loader: 'file-loader?name=/views/[name].[ext]'
      }
    ]
  }
};
