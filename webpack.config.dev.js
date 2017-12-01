const Config = require('webpack-config');
const webpack = require('webpack');
const autoprefixer = require('autoprefixer');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

const cssFilename = 'static/css/[name].[contenthash:8].css';
const jsFilename = 'static/js/main.[hash].js';

module.exports = {
    entry: [
        'react-hot-loader/patch',
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index'
    ],
    output: {
        path: path.resolve(__dirname, 'build'),
        publicPath: '/',
        filename: jsFilename
    },
    resolve: {
        extensions: ['.json', '.js', '.jsx', '.scss']
    },
    module: {
        rules: [
            {
                test: /.jsx?$/,
                loader: 'babel-loader',
                include: [
                    path.resolve(__dirname, 'src')
                ],
                exclude: /node_modules/
            },
            {
                test: /(\.css|\.scss)$/,
                loader: ExtractTextPlugin.extract(
                    Object.assign(
                        {
                            fallback: {
                                loader: require.resolve('style-loader'),
                                options: {
                                    sourceMap: true
                                },
                            },
                            use: [
                                {
                                    loader: require.resolve('css-loader'),
                                    options: {
                                        importLoaders: 1,
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
                                                browsers: ['last 2 versions', 'ie >= 11'],
                                                flexbox: 'no-2009'
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
    devtool: 'source-map',
    plugins: [
        new HtmlWebpackPlugin({
            template: './src/index.html',
            inject: "body"
        }),
        new ExtractTextPlugin({
            filename: cssFilename,
            allChunks: true
        }),
        new webpack.HotModuleReplacementPlugin()
    ]
};