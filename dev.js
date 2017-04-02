module.exports = function (env) {
  return {
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
    plugins: [
        // new webpack.optimize.UglifyJsPlugin({ 
        //     minimize: true,
        //     output: {
		// 	    ascii_only: true
        //     }
        // }),
        // new webpack.DefinePlugin({
        //     'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development')
        // }),
    ],
    // postcss: function () {
    //     return [autoprefixer];
    // },
    devtool: 'source-map',
    //devtool: 'cheap-module-source-map',
    // resolve: {
    //     alias: {
    //         "react": "preact-compat",
    //         "react-dom": "preact-compat",
    //         "react-addons-css-transition-group": "preact-css-transition-group"
    //     }
    // }
  }
};