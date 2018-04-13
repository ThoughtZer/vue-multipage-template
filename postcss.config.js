module.exports = {
  "plugins": {
    // to edit target browsers: use "browserslist" field in package.json
    "autoprefixer": {
      browsers: ['last 2 versions', 'Android >= 4.0', 'iOS >= 6']
    },
    // 因为 webpack 压缩的问题 https://github.com/songsiqi/px2rem/issues/2 占时启用 自己修改后的插件
    "postcss-px2rem-eliminate": {
      baseDpr: 2,
      remUnit: 37.5,
      exclude: /node_modules/
    }
  }
}
