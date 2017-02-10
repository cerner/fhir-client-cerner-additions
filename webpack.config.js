/* eslint-disable no-var */
var webpack = require('webpack');
var path = require('path');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var pjson = require('./package.json');

module.exports = {
  entry: { 'fhir-client-cerner-additions': [
    './webpack.entry.js'
  ]},
  output: {
    filename: './js/[name]-' + pjson.version + '.min.js',
    path: "./dist"
  },
  resolve: {
    extensions: ['', '.js'],
    root: path.resolve(path.join(__dirname, 'src'))
  },
  devtool: 'source-map',
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel'],
        include: /src|index\.js/
      }
    ]
  }
};
