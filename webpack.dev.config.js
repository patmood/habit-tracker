var path = require('path')
var webpack = require('webpack')

module.exports = {
  devtool: 'cheap-module-eval-source-map',

  entry: [
    './src/js/app',
  ],

  output: {
    path: path.join(__dirname, 'public'),
    filename: 'bundle.js',
    publicPath: '/public/',
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],

  module: {
    loaders: [{
      test: /\.jsx?/,
      loaders: ['babel'],
      exclude: /node_modules/,
      include: path.join(__dirname, 'src'),
    }],
  },

  resolve: {
    extensions: ['', '.js', '.jsx'],
  },
}
