### 根据github的vue-multiple-pages项目更改的自用VueJs多页面模版


#### 注意事项：

  1. 字体和初始化CSS/Stylus文件在common中存放。在组件中，使用@import导入
  (字体文件必须是在同一个文件夹font/css文件格式)
  2. 不要在单独的组件文件夹写单独的css/stylus文件，因为如果要使用图片路径可能不对。
  推荐在单独组件的文件夹内部，建立一个img文件夹，放图片(不宜过大)，
  然后在组件的style标签内部引入图片。
  3. 本次提交之后不再需要手动更改webpack.config.js里面的pubilcPath。
  
#### License

MIT



