const merge = require('webpack-merge')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')
const OptimizeCSSPlugin = require('optimize-css-assets-webpack-plugin')

const prodWebpackConfig = merge(baseWebpackConfig, {
  devtool: '#cheap-module-source-map',
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      sourceMap: process.env.NODE_ENV === 'development'
    }),
    new OptimizeCSSPlugin()
  ]
})

module.exports = prodWebpackConfig
