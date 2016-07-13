const express = require('express');
const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');

const tasks = require('./tasks');
const config = require('./webpack.config.babel');

// generate a 'fresh' unpacked extension folder
tasks.copyAssets('dev');

// setup server
const port = 3000;
const app = express();

// compile config
var compiler = webpack(config);

// configure webpack dev middleware
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath,
}));

// configure webpack hot middleware
app.use(webpackHotMiddleware(compiler));

// start server
app.listen(port, (err) => {
  if (err) {
    console.log(err);
  }
  console.info('==> 🌎 Listening on port %s. Open up http://localhost:%s/ in your browser.', port, port);
});
