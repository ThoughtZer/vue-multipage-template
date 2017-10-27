### 根据github的vue-multiple-pages项目更改的自用VueJs/JQ/JS多页面模版


#### 注意事项：

  1. 字体和初始化CSS/Stylus文件在common中存放。在组件中，使用@import导入
  (字体文件必须是在同一个文件夹font/css文件格式)
  2. components文件夹是放公共组件，结构就是普通的*.vue文件
  2. 尽可能不要在单独的组件文件夹写单独的css/stylus文件，会导致央视文件中图片路径不对。 \
  **推荐在单独组件的文件夹内部，建立一个img文件夹，放图片(不宜过大)，然后在组件的style标签内部引入图片。** \
  如果样式中引入背景图片过大，可以适当的调大 *webpack.config.js* 里面的 __url-loader__ 的 __limit__ 的参数，但是这样做或许会让你的JS文件过大。\
  (综上：不推荐使用大图片做背景图，可以做一些适当的压缩或者使用img标签引用)。
  3. 经过测试，在pages的页面文件夹中，也可以不用vue，使用普通的页面也可以压缩打包。详见CommonPages文件夹，但同样不推荐使用大图片做背景图
  4. mock文件夹下是使用express启动一个前端服务，便于模拟数据接口。使用方法见已有代码，启动方法：npm run server
  
#### 使用方法：

    npm run dev // 开发环境，localhost:7290
    
    npm run build // 打包生成dist目录
    
    npm run server // 启动express,监听localhost:3333
