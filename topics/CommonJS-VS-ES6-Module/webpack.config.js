const path = require('path');


module.exports = {
    mode: 'development',
    entry: {
        1: './1/3-test.js',
        2: './2/3-test.js',
        3: './3/3-test.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name]-bundle.js'
    },
    devServer: {
        contentBase: path.join(__dirname, 'dist'),
    },
    module: {
        rules: [
            {
                test: /\.js/,
                loader: 'babel-loader'
            }
        ]
    }
};