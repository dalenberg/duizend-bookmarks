const path = require('path');
const webpack = require('webpack');
const publicPath = path.join(__dirname, './customPublicPath');

const config = {
  entry: [publicPath, path.join(__dirname, '../app/index')],
  output: {
    path: path.join(__dirname, '../build/js'),
    filename: 'bundle.js',
  },
  resolve: {
    extensions: ['', '.js', '.jsx'],
    alias: {
      "react": "preact-compat",
      "react-dom": "preact-compat"
    }
  },
  module: {
    loaders: [{
      test: /(\.jsx\.js)?$/,
      loader: 'babel',
      exclude: /node_modules/,
    }],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.IgnorePlugin(/[^/]+\/[\S]+.dev$/),
    new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      comments: false,
      compressor: {
        warnings: false,
      },
    }),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('production'),
      },
    }),
  ],
};

module.exports = config;
