const {join, resolve} = require('path')
const webpack = require('webpack')
const glob = require('glob')

const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CommonsChunkPlugin = require('webpack/lib/optimize/CommonsChunkPlugin')

const vuxLoader = require('vux-loader')

const debug = process.env.NODE_ENV !== '"production"' // 开发环境的判断

const extractCSS = new ExtractTextPlugin({
  filename: 'assets/css/[name].css',
  allChunks: true
})

const extractSTYLUS = new ExtractTextPlugin({
  filename: 'assets/css/[name].css',
  allChunks: true
})

const entries = {}
const chunks = []
const HtmlWebpackPluginArray = []
glob.sync('./src/pages/**/app.js').forEach(path => {
  const chunk = path.split('./src/pages/')[1].split('/app.js')[0]
  entries[chunk] = path
  chunks.push(chunk)

  const filename = chunk + '.html'
  const htmlConf = {
    filename: filename,
    template: path.replace(/.js/g, '.html'),
    inject: 'body',
    hash: true,
    chunks: ['vendors', chunk]
  }
  HtmlWebpackPluginArray.push(new HtmlWebpackPlugin(htmlConf))
})

var config = {
  entry: entries,
  output: {
    path: resolve(__dirname, '../dist'),
    filename: 'assets/js/[name].js',
    publicPath: '/' // 尽可能打包之后启动服务，不要双击打开.html
    // publicPath: debug ? '/' : '../' // 前后端不分离的情况下使用，避免静态资源访问不到。但是图片和字体文件路径问题仍没有解决
  },
  resolve: {
    extensions: ['.js', '.vue'],
    alias: {
      assets: join(__dirname, '../src/assets'),
      common: join(__dirname, '../src/common'),
      components: join(__dirname, '../src/components'),
      root: join(__dirname, '../node_modules')
    }
  },
  module: {
    rules: [
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: {
          loaders: {
            css: ['css-hot-loader'].concat(ExtractTextPlugin.extract(
              {
                use: 'css-loader',
                fallback: 'style-loader'
              })),
            stylus: ['css-hot-loader'].concat(ExtractTextPlugin.extract(
              {
                use: [
                  'css-loader',
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: debug
                    }
                  },
                  'stylus-loader'],
                fallback: 'style-loader'
              })),
            postcss: ExtractTextPlugin.extract(
              {
                use: [
                  'css-loader',
                  {
                    loader: 'postcss-loader',
                    options: {
                      sourceMap: debug
                    }
                  }
                ],
                fallback: 'style-loader'
              })
          }
        }
      },
      {
        test: /\.(js|vue|jsx)$/,
        loader: 'eslint-loader',
        enforce: 'pre',
        include: [resolve('src')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { sourceMap: debug } },
            { loader: 'postcss-loader', options: { sourceMap: debug } }
          ],
          fallback: 'style-loader'
        }))
      },
      {
        test: /\.styl/,
        use: ['css-hot-loader'].concat(ExtractTextPlugin.extract({
          use: [
            { loader: 'css-loader', options: { sourceMap: debug } },
            { loader: 'postcss-loader', options: { sourceMap: debug } },
            { loader: 'stylus-loader', options: { sourceMap: debug } }
          ],
          fallback: 'style-loader'
        }))
      },
      {
        test: /\.html$/,
        use: [{
          loader: 'html-loader',
          options: {
            root: resolve(__dirname, 'src'),
            attrs: ['img:src', 'link:href']
          }
        }]
      },
      {
        test: /\.(png|jpg|jpeg|gif)(\?.+)?$/,
        exclude: /favicon\.png$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/img/[name].[hash:8].[ext]'
          }
        }]
      },
      {
        test: /\.(woff2?|woff|eot|ttf|otf|svg|svgz)(\?.*)?$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 10000,
            name: 'assets/fonts/[name].[hash:8].[ext]'
          }
        }]
      }
    ]
  },
  plugins: [
    // new webpack.HotModuleReplacementPlugin(), 在开发环境执行脚本里面添加了 --hot 不用手从引入，反之亦然
    new webpack.optimize.OccurrenceOrderPlugin(),
    new webpack.BannerPlugin('create by 木メメ木+大'),
    new webpack.DefinePlugin({
      'process.env': {
        NODE_ENV: !debug ? '"production"' : '"development"'
      }
    }),
    new CommonsChunkPlugin({
      name: 'vendors',
      filename: 'assets/js/vendors.js',
      chunks: chunks,
      minChunks: chunks.length
    }),
    extractSTYLUS,
    extractCSS,
    ...HtmlWebpackPluginArray
  ]
}

config = vuxLoader.merge(config, {
  plugins: [
    {
      name: 'vux-ui'
    }
  ]
})

module.exports = config
