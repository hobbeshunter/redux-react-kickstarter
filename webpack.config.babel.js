'use strict';

import { DefinePlugin, HotModuleReplacementPlugin } from 'webpack';

import DashboardPlugin from 'webpack-dashboard/plugin';
import baseConfig from './webpack.base.config.babel';
import path from 'path';
import webpackMerge from 'webpack-merge';

export default function ( env ) {
    return webpackMerge( baseConfig(), {
        devtool: 'eval-source-map',
        devServer: {
            historyApiFallback: true,
            hot: true,
            stats: 'errors-only'
        },
        entry: [
            'webpack-dev-server/client?http://localhost:8080',
            'webpack/hot/only-dev-server',
            'react-hot-loader/patch',
            path.resolve( __dirname, 'src/index.jsx' )
        ],
        plugins: [
            new DefinePlugin( {
                'process.env.NODE_ENV': JSON.stringify( 'development' )
            } ),
            new HotModuleReplacementPlugin(),
            new DashboardPlugin()
        ]
    } );
}
