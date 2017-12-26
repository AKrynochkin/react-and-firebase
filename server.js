var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./config/webpack.config.dev');
var open = require('open');

const PORT = 3000;
const entry = `http://localhost:${PORT}/`;

new WebpackDevServer(webpack(config), {
    historyApiFallback: true,
    hot: true,
    port: PORT,
    open: true
}).listen(PORT, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at localhost:${PORT}`);
  open(entry);
});
