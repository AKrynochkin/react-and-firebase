var webpack = require('webpack');
var WebpackDevServer = require('webpack-dev-server');
var config = require('./config/webpack.config.dev');

const PORT = 3000;

new WebpackDevServer(webpack(config), {
    historyApiFallback: true,
    hot: true,
    port: PORT
}).listen(PORT, 'localhost', function (err, result) {
  if (err) {
    console.log(err);
  }

  console.log(`Listening at localhost:${PORT}`);
});
