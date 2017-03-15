var webpack = require("webpack");

module.exports = {
    entry: './src/main.js',
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
    // plugins: [
    //     new webpack.optimize.UglifyJsPlugin({ minimize: true })
    // ],
    // postcss: function () {
    //     return [autoprefixer];
    // },
    devtool: 'source-map',
    resolve: {
        alias: {
            "react": "preact-compat",
            "react-dom": "preact-compat",
            "react-addons-css-transition-group": "preact-css-transition-group"
        }
    }
};