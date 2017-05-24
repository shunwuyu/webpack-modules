const webpack = require('webpack');
const nodeEnv = process.env.NODE_ENV || 'production';
// var ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
  devtool: 'source-map',
  entry: {
    filename: './app.js'
  },
  output: {
    filename: '_build/bundle.js'
  },
  module: {
    loaders: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
        query: {
          presets: ['es2015-native-modules']
        }
      }
    ]
  },
  plugins:[
    new webpack.optimize.UglifyJsPlugin({
      compress: {},
      output: { comments: false },
      sourceMap: true
    }),
    new webpack.DefinePlugin({
      'process.env':{ NODE_ENV: JSON.stringify(nodeEnv) }
    })
  ]
}
