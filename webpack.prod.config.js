var webpack = require("webpack");

module.exports = {
    entry: './src/index.js',
    output: {
        path: './',
        filename: 'script.min.js'
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                loader: 'babel',
                query: {
                    presets: ['es2015', 'react']
                }
            },
            {
                test: /\.json$/,
                loader: 'json-loader'
            },
            // {
            //     test: /\.css$/,
            //     loaders: [
            //         'style-loader',
            //         'css-loader?importLoaders=1',
            //         'postcss-loader'
            //     ]
            // }
        ]
    },
    plugins: [
        new webpack.optimize.UglifyJsPlugin({
            minimize: true,
            output: {
                ascii_only: true
            },
            beautify: false,
            mangle: {
                screw_ie8: true,
                keep_fnames: true
            },
            compress: {
                screw_ie8: true
            },
            comments: false
        }),
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        }),
        // new webpack.optimize.UglifyJsPlugin({
        //     beautify: false,
        //     mangle: {
        //         screw_ie8: true,
        //         keep_fnames: true
        //     },
        //     output: {
        //         ascii_only: true
        //     },
        //     compress: {
        //         screw_ie8: true
        //     },
        //     comments: false
        // })
        //new webpack.optimize.UglifyJsPlugin({ minimize: true })
    ],
    devtool: 'cheap-module-source-map',
    resolve: {
        alias: {
            "react": "preact-compat",
            "react-dom": "preact-compat"
        }
    }
};