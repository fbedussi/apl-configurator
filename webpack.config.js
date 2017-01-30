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
            }
        ]
    },
    devtool: 'source-map'
};