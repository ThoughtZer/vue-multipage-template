const merge = require('webpack-merge');
const baseWebpackConfig = require('./webpack.base.conf');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CleanWebpackPlugin = require('clean-webpack-plugin');
const TerserPlugin = require('terser-webpack-plugin');

const prodWebpackConfig = merge(baseWebpackConfig, {
  mode: 'production',
  devtool: 'cheap-module-source-map',
  output: {
    publicPath: '/'
  },
  module: {
    rules: [
      {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
          },
          'css-loader',
        ]
      },
      {
        test: /\.(scss|sass)?$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
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
    new CleanWebpackPlugin(),
    new MiniCssExtractPlugin({
      filename: 'assets/css/[name].[contenthash:8].css',
      chunkFilename: 'assets/css/[name].[contenthash:8].css',
    }),
  ],
  optimization: {
    runtimeChunk: {
      name: 'runtime'
    },
    minimizer: [
      new OptimizeCSSAssetsPlugin({}),
      new TerserPlugin({
        cache: true,
        parallel: true,
      })
    ],
    splitChunks: {
      chunks: 'all',
      minSize: 10000,
      maxSize: 0,
      minChunks: 1,
      maxAsyncRequests: 5,
      maxInitialRequests: 3,
      automaticNameDelimiter: '~',
      name: true,
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendor',
        },
        default: {
          minChunks: 2,
          priority: -20,
          reuseExistingChunk: true,
        }
      }
    },
  },
})

module.exports = prodWebpackConfig;
