const path = require('path');
const webpack = require('webpack');
const glob = require('glob');

const HTMLWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const VueLoaderPlugin = require('vue-loader/lib/plugin');

let HTMLPlugins = [];
let Entries = {};

const env = process.env.BUILD_MODE.trim();
let ASSET_PATH = '/'; // dev 环境
if (env === 'prod') ASSET_PATH = './'; // build 时设置成实际使用的静态服务地址

glob.sync('./src/pages/**/index.js').forEach(item => {
  const chunk = item.split('./src/pages/')[1].split('/index.js')[0];
  Entries[chunk] = item;

  const filename = chunk + '.html';
  const htmlConf = {
    filename: filename,
    template: path.resolve(__dirname, `../src/template/index.html`),
    inject: 'body',
    hash: true,
    chunks: [chunk, 'vendor']
  };
  HTMLPlugins.push(new HTMLWebpackPlugin(htmlConf));
});

module.exports = {
  entry: Entries,
  output: {
    publicPath: ASSET_PATH,
    filename: 'js/[name].[hash:8].js',
    path: path.resolve(__dirname, '../dist'),
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        use: 'vue-loader',
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      }
    ]
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, '../src/components'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@assets': path.resolve(__dirname, '../src/assets'),
      '@commons': path.resolve(__dirname, '../src/commons'),
      '@mixins': path.resolve(__dirname, '../src/pages/page.js'),
      '@vuex': path.resolve(__dirname, '../src/store'),
    },
    extensions: ['.js','.vue']
  },
  plugins: [
    new VueLoaderPlugin(),
    new webpack.optimize.OccurrenceOrderPlugin(true),
    new webpack.BannerPlugin('create by ThoughtZer'),
    new CopyWebpackPlugin([
      {
        from: path.resolve(__dirname, '../public'),
        to: path.resolve(__dirname, '../dist'),
        ignore: ['*.html']
      }
    ]),
    new webpack.DefinePlugin({
      'process.env.ASSET_PATH': JSON.stringify(ASSET_PATH), // 利用 process.env.ASSET_PATH 保证模板文件中引用正确的静态资源地址
      'process.env': {
        NODE_ENV: env === 'prod' ? '"production"' : '"development"'
      }
    }),
    ...HTMLPlugins // 利用 HTMLWebpackPlugin 插件合成最终页面
  ]
};
