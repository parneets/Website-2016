var path = require('path');
var webpack = require('webpack');

module.exports = {
  entry: './index.js',
  output: { path: __dirname, filename: 'bundle.js' },
  module: {
    loaders: [
      {
        test: /.jsx?$/,
        loader: 'babel-loader',
        exclude: /node_modules/,
        query: {
          presets: ['es2015', 'react', 'stage-0']
        }
      },
        {
      		test: /\.less$/,
            loader: 'style!css!less'
        },
        {
      		test: /\.css/,
            loader: 'style!css!less'
        },
        {
            test: /\.(jpe?g|png|gif|svg)$/i,
            loader: 'file-loader'
        },
    ],
  },
};
