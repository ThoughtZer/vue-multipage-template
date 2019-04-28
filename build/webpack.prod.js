// 引入基础配置
const path = require('path');
const webpackBase = require('./webpack.base');

const webpackMerge = require('webpack-merge');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');

const ASSET_PATH = './';
// 合并配置文件
module.exports = webpackMerge(webpackBase, {
  mode: 'production',
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'postcss-loader'
        ]
      }, {
        test: /\.scss$/,
        exclude: /node_modules/,
        use: [
          MiniCssExtractPlugin.loader,
          'css-loader',
          'sass-loader',
          'postcss-loader',
          {
            loader: 'sass-resources-loader',
            options: {
              resources: path.resolve(__dirname, '../src/styles/lib/main.scss'),
            },
          }
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg)(\?.+)?$/,
        use: {
          loader: 'url-loader', // 解决打包css文件中图片路径无法解析的问题
          options: {
            // 打包生成图片的名字
            name: '[name].[hash:8].[ext]',
            limit: 10000,
            // 图片的生成路径
            outputPath: 'img/',
            publicPath: `${ASSET_PATH}img/`
          }
        }
      },
      {
        test: /\.(woff2?|woff|eot|ttf|otf|svg|svgz)(\?.*)?$/,
        use: {
          loader: 'url-loader',
          options: {
            limit: 10000,
            outputPath: 'font/',
            publicPath: `${ASSET_PATH}font/`
          }
        }
      }
    ]
  },
  optimization: {
    splitChunks: {
      chunks: 'all', // 同步异步引入都打包
      minSize: 30000, // 至少大于30kb
      maxSize: 0,
      minChunks: 1, // 被引入一次就算
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true // 允许复用已经存在的代码块，而不是新建一个新的，需要在精确匹配到对应模块时候才会生效。
        }
      }
    },
    minimizer: [
      new UglifyJsPlugin({ // 压缩js
        uglifyOptions: {
          compress: {
            warnings: false,
            drop_debugger: false,
            drop_console: true
          }
        }
      }),
      new OptimizeCSSAssetsPlugin({ // 压缩css
        cssProcessorOptions: {
          safe: true
        }
      })
    ]
  },
  plugins: [
    // 自动清理 dist 文件夹
    new CleanWebpackPlugin(['dist'], {
      root: path.resolve(__dirname, '..'),
      verbose: true,
      dry: false,
    }),
    new MiniCssExtractPlugin({
      filename: 'css/[name].[chunkhash:8].css'
    })
  ]
});
