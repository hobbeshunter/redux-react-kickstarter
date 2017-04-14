'use strict';

import { DefinePlugin, LoaderOptionsPlugin, optimize } from 'webpack';

import baseConfig from './webpack.base.config.babel';
import path from 'path';
import webpackMerge from 'webpack-merge';

// import ImageminPlugin from 'imagemin-webpack-plugin';

export default function ( env ) {
    return webpackMerge( baseConfig(), {
        devtool: 'cheap-module-source-map',
        entry: [
            path.resolve( __dirname, 'src/index.jsx' )
        ],
        plugins: [
            new DefinePlugin( {
                'process.env.NODE_ENV': JSON.stringify( 'production' )
            } ),
            new optimize.UglifyJsPlugin( { sourceMap: true } ),
            // new ImageminPlugin( {
            //     pngquant: {
            //         quality: '95-100'
            //     }
            // } ),
            new LoaderOptionsPlugin( {
                minimize: true,
                debug: false
            } )
        ]
    } );
}
