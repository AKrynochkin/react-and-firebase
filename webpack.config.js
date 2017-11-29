const autoprefixer = require('autoprefixer');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');

const cssFilename = '[name].[contenthash:8].css';

module.exports = {
  entry: path.join(__dirname, 'src', 'index'),
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'build')
  },
  module: {
    rules: [
      {
        test: /.jsx?$/,
        include: [
          path.resolve(__dirname, 'src')
        ],
        exclude: [
          path.resolve(__dirname, 'node_modules'),
          path.resolve(__dirname, 'bower_components')
        ],
        loader: 'babel-loader'
      },
      {
        test: /(\.css|\.scss)$/,
        loader: ExtractTextPlugin.extract(
          Object.assign(
            {
              fallback: {
                loader: require.resolve('style-loader'),
                options: {
                  hmr: false,
                },
              },
              use: [
                {
                  loader: require.resolve('css-loader'),
                  options: {
                    url: false,
                    importLoaders: 1,
                    minimize: true,
                    sourceMap: true
                  },
                },
                {
                  loader: require.resolve('postcss-loader'),
                  options: {
                    sourceMap: true,
                    // Necessary for external CSS imports to work
                    // https://github.com/facebookincubator/create-react-app/issues/2677
                    ident: 'postcss',
                    plugins: () => [
                      require('postcss-flexbugs-fixes'),
                      autoprefixer({
                        browsers: ['last 2 versions', 'ie >= 10'],
                        flexbox: 'no-2009',
                      }),
                    ],
                  },
                },
                require.resolve('resolve-url-loader'),
                {
                  loader: require.resolve('sass-loader'),
                  options: {
                    sourceMap: true
                  }
                }
              ],
            }
          )
        ),
        // Note: this won't work without `new ExtractTextPlugin()` in `plugins`.
      }
    ]
  },
  resolve: {
    extensions: ['.json', '.js', '.jsx', '.css']
  },
  devtool: 'source-map',
  devServer: {
    publicPath: path.join('/dist/')
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/index.html',
      inject: "body"
    }),
    new ExtractTextPlugin({
      filename: cssFilename,
      allChunks: true
    })
  ]
};