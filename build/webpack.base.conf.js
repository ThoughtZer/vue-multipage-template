const { join, resolve } = require('path');
const webpack = require('webpack');
const glob = require('glob');

const HtmlWebpackPlugin = require('html-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

const entries = {};
const chunks = [];
const HtmlWebpackPluginArray = [];

glob.sync('./src/pages/**/app.js').forEach(path => {
  const chunk = path.split('./src/pages/')[1].split('/app.js')[0];
  entries[chunk] = path;
  chunks.push(chunk);
  const filename = chunk + '.html';
  const htmlConf = {
    filename: filename,
    template: path.replace(/.js/g, '.html'),
    inject: 'body',
    hash: true,
    chunks: ['vendor', 'runtime', chunk],
  }
  HtmlWebpackPluginArray.push(new HtmlWebpackPlugin(htmlConf));
})
var config = {
  entry: entries,
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'assets/js/[name].[hash:8].js',
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      assets: join(__dirname, '../src/assets'),
      common: join(__dirname, '../src/common'),
      components: join(__dirname, '../src/components'),
      root: join(__dirname, '../node_modules'),
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: [
          'vue-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
          },
        ]
      },
      {
        test: /\.(png|jpg|jpeg|gif)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 10000,
              name: 'assets/img/[name].[hash:8].[ext]',
            },
          },
          {
            loader: 'image-webpack-loader',
            options: {
              mozjpeg: {
                progressive: true,
                quality: 55,
              },
              pngquant: {
                quality: '65-90',
                speed: 4,
              },
              optipng: {
                enabled: false,
              },
              gifsicle: {
                interlaced: false,
              },
            },
          }
        ]
      },
      {
        test: /\.(woff2?|woff|eot|ttf|otf|svg|svgz)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/fonts/[name].[hash:8].[ext]',
          },
        }]
      }
    ]
  },
  plugins: [
    new webpack.BannerPlugin('create by 木メメ木+大'),
    new VueLoaderPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NamedChunksPlugin(),
    ...HtmlWebpackPluginArray,
  ],
}

module.exports = config;
