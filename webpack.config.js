module.exports = {
    entry: './src/main.js',
    output: {
        path: './',
        filename: 'script.js'
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
            {
                test: /\.css$/,
                loaders: [
                    'style-loader',
                    'css-loader?importLoaders=1',
                    'postcss-loader'
                ]
            }
        ]
    },
    // postcss: function () {
    //     return [autoprefixer];
    // },
    devtool: 'source-map'
};