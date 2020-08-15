const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
     app: './src/25.js',
  },
  devtool: 'inline-source-map',
  devServer: {
    contentBase: './dist',
     hot: true,
  },
  plugins: [
    new HtmlWebpackPlugin({
        template: 'index.html'
    }),
  ],
  output: {
    filename: '[name].bundle.js',
    path: path.resolve(__dirname, 'dist'),
  },
};