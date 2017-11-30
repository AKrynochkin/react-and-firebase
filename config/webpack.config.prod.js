const Config = require('webpack-config');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const cssFilename = 'static/css/[name].[contenthash:8].css';
const jsFilename = 'static/js/main.[hash].min.js';

module.exports = {
    entry: [
        './src/index'
    ],
    output: {
        path: path.resolve(__dirname, '../build'),
        publicPath: '/',
        filename: jsFilename
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                include: path.resolve(__dirname, 'src'),
                exclude: /node_modules/,
                loader: require.resolve('babel-loader')
            },
            {
                test: /(\.css|\.scss)$/,
                loader: ExtractTextPlugin.extract(
                    Object.assign(
                        {
                            fallback: {
                                loader: require.resolve('style-loader'),
                                options: {
                                    hmr: false
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
                )
            }
        ]
    },
    resolve: {
        extensions: ['.js', '.jsx', '.scss']
    },
    devtool: 'source-map',
    plugins: [
        new CleanWebpackPlugin(['build']),
        new webpack.optimize.UglifyJsPlugin({
            compress: {
                warnings: true
            }
        }),
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: "body"
        }),
        new ExtractTextPlugin({
            filename: cssFilename,
            allChunks: true
        }),
    ]
};