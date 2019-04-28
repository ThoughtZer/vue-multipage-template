const path = require('path');
const webpackBase = require('./webpack.base');
const webpackMerge = require('webpack-merge');

module.exports = webpackMerge(webpackBase, {
  mode: 'development',
  devtool: '#cheap-module-eval-source-map',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          'vue-style-loader',
          'css-loader',
          'postcss-loader',
        ]
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          'vue-style-loader',
          'css-loader',
          'sass-loader',
          'postcss-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, '../src/styles/lib/main.scss'),
            }
          }
        ]
      },
      {
        test: /\.(js|vue)$/,
        enforce: 'pre',
        exclude: /node_modules|lib/,
        loader: 'eslint-loader',
        options: {
          fix: true,
          emitWarning: true,
        }
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)(\?.+)?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'img/',
            limit: 10000,
          }
        }
      },
      {
        test: /\.(woff2?|woff|eot|ttf|otf|svg|svgz)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            name: '[name].[hash:8].[ext]',
            outputPath: 'font/',
            limit: 10000,
          }
        }
      }
    ]
  },
  devServer: {
    host: '127.0.0.1',
    historyApiFallback: false,
    port: '7290',
    // contentBase: '../dist',
    hot: true,
    hotOnly: true,
    overlay: {
      errors: true,
      warnings: true,
    },
    proxy: {
      '/api': {
        target: 'http://localhost:3333',
        changeOrigin: true
      }
    }
  }
});
