const path = require('path');
const webpack = require('webpack');

const host = 'localhost';
const port = 3000;
const publicPath = `http://${host}:${port}`;
const hotScript = `webpack-hot-middleware/client?path=${publicPath}/__webpack_hmr`;

const baseDevConfig = () => ({
  devtool: 'eval-cheap-module-source-map',
  entry: [hotScript, path.join(__dirname, '../app/index')],
  output: {
    path: path.join(__dirname, '../dev/js'),
    filename: 'bundle.js',
    publicPath: `${publicPath}/js`,
  },
  resolve: {
    extensions: ['', '.js'],
  },
  module: {
    loaders: [{
      test: /\.js$/,
      loader: 'babel',
      exclude: /node_modules/,
      query: {
        presets: ['react-hmre'],
      },
    }],
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: JSON.stringify('development'),
      },
    }),
  ],
});

const appConfig = baseDevConfig();

module.exports = appConfig;
