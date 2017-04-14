'use strict';

import { NamedModulesPlugin, NoEmitOnErrorsPlugin } from 'webpack';

import FaviconsWebpackPlugin from 'favicons-webpack-plugin';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import path from 'path';

export default function () {
    return {
        output: {
            path: path.resolve( __dirname, 'dist/' ),
            filename: '[name].js',
            publicPath: '/',
            sourceMapFilename: '[name].map'
        },
        target: 'web',
        plugins: [
            new HtmlWebpackPlugin( {
                template: 'src/index.tpl.html',
                inject: 'body',
                filename: 'index.html'
            } ),
            new NoEmitOnErrorsPlugin(),
            new NamedModulesPlugin(),
            new FaviconsWebpackPlugin( 'images/favicon.png' )
        ],
        module: {
            rules: [ {
                test: /\.jsx?$/,
                enforce: 'pre',
                exclude: /node_modules/,
                loader: 'eslint-loader',
                options: {
                    configFile: '.eslintrc',
                    failOnWarning: false,
                    failOnError: false
                }
            }, {
                test: /\.jsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
                include: __dirname
            }, {
                test: /\.(png|jpe?g|gif|svg)$/,
                exclude: /icons/,
                use: [ {
                    loader: 'file-loader',
                    options: {
                        name: 'images/[name]---[hash:base64:5].[ext]'
                    }
                } ]
            }, {
                test: /\.svg$/,
                include: /icons/,
                use: [ {
                    loader: 'babel-loader'
                }, {
                    loader: 'react-svg-loader',
                    query: {
                        jsx: true,
                        svgo: {
                            plugins: [ {
                                removeStyleElement: true,
                                cleanupAttrs: true,
                                cleanupIDs: true,
                                mergePaths: true,
                                removeUselessStrokeAndFill: true,
                                removeUnusedNS: true,
                                cleanupNumericValues: true
                            } ],
                            floatPrecision: 2,
                            pretty: true
                        }
                    }
                } ]
            } ]
        },
        resolve: {
            modules: [ path.join( __dirname, './src' ), 'node_modules' ],
            descriptionFiles: [ 'package.json' ],
            mainFiles: [ 'index' ],
            extensions: [ '.js', '.jsx' ],
            enforceExtension: false,
            alias: {
                styleGlobals: path.resolve( __dirname, 'src/styles/styleGlobals' ),
                ConfiguredRadium: path.resolve( __dirname, 'src/styles/ConfiguredRadium' ),
                ConfiguredAxios: path.resolve( __dirname, 'src/api/ConfiguredAxios' )
            }
        }
    }
};
