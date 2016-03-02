var webpack = require('webpack');
var path = require('path');
module.exports = {
  devtool: 'source-map',
  entry: [
    '../src/index'
  ],
  module: {
    loaders: [
      { test: /\.jsx$/,
             loader: 'babel-loader',
             include: path.join(__dirname, 'src') },
           { test: /\.js$/,
             loader: 'babel-loader',
             exclude: /node_modules/ },
           { test: /\.scss?$/,
             loader: 'style!css!sass',
             include: path.join(__dirname, 'css') },
           ]
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    publicPath: '/',
    filename: 'bundle.js'
  },
  plugins: [
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      minimize: true,
      compress: {
        warnings: false
      }
    })
  ]
};
