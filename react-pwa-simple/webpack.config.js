const path = require('path');

const SRC_DIR = path.resolve(__dirname, 'src');
const DIST_DIR = path.resolve(__dirname, 'dist');

var HtmlWebpackPlugin = require('html-webpack-plugin')
var HtmlWebpackPluginConfig = new HtmlWebpackPlugin({
  template: __dirname + '/dist/index.html',
  filename: 'index.html',
  inject:'body'
})

const config = {
  entry: path.resolve(SRC_DIR, 'index.js'),

  output: {
    path: DIST_DIR,
    filename: 'js/index.js',
  },

  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        //include: SRC_DIR,
        exclude:/node_modules/,
        loader: 'babel-loader',
      },
    ],
  },
  plugins:[HtmlWebpackPluginConfig]
};

module.exports = config;
