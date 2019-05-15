const path = require('path');
const merge = require('webpack-merge');
const webpack = require('webpack');
const baseWebpackConfig = require('./webpack.base.conf');

const devWebpackConfig = merge(baseWebpackConfig, {
  mode: 'development',
  devtool: 'cheap-module-eval-source-map',
  output: {
    publicPath: '/'
  },
  devServer: {
    contentBase: path.resolve(__dirname, '../dist'),
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
    },
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          'css-loader',
        ]
      },
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        exclude: /node_modules|lib/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(scss|sass)?$/,
        use: [
          {
            loader: 'vue-style-loader'
          },
          {
            loader: 'css-loader',
            options: {
              sourceMap: false,
              importLoaders: 2,
            }
          },
          {
            loader: 'sass-loader',
            options: {
              sourceMap: false,
            }
          },
          {
            loader: 'postcss-loader',
            options: {
              sourceMap: false
            }
          },
        ]
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ]
})

module.exports = devWebpackConfig;
