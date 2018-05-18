const merge = require('webpack-merge')
const webpack = require('webpack')
const baseWebpackConfig = require('./webpack.base.conf')

const devWebpackConfig = merge(baseWebpackConfig, {
  devtool: '#cheap-module-eval-source-map',
  devServer: {
    host: '127.0.0.1',
    port: 7290,
    hot: true,
    historyApiFallback: false,
    noInfo: false,
    overlay: {
      errors: true // 页面中展示错误
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        changeOrigin: true
      }
    }
  },
  plugins: [
    new webpack.NoEmitOnErrorsPlugin()
  ]
})

module.exports = devWebpackConfig
