const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');


module.exports = {
    mode: 'development',
    entry: {
        app: './src/app.js'
    },
    output: {
        path: path.resolve(__dirname, "dist"),
        filename: '[name].js'
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
    },
    // plugins: [
    //     new HtmlWebpackPlugin({
    //         template: 'src/single-box.html'
    //     })
    // ]
};