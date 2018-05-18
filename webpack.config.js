const webpack = require('webpack')

let fn = process.env.NODE_ENV === 'development' ? 'dev' : 'prod'
module.exports = require(`./build/webpack.${fn}.conf.js`)
