### 自用VueJs/JQ/JS多页面模版

本次更新之后推荐使用 yarn 来管理 node 包
  
#### 使用方法：

    yarn install

    yarn dev    // 开发环境，localhost:7290
    
    yarn build  // 打包生成dist目录
    
    yarn server // 启动express,监听localhost:3333

#### 注意事项：

  - 字体和初始化CSS/Stylus文件在common中存放。在组件中，使用@import导入
  (字体文件必须是在同一个文件夹font/css文件格式)
  -  components文件夹是放公共组件，结构就是普通的*.vue文件
  - 尽可能不要在单独的组件文件夹写单独的css/stylus文件，会导致央视文件中图片路径不对。 \
  **推荐在单独组件的文件夹内部，建立一个img文件夹，放图片(不宜过大)，然后在组件的style标签内部引入图片。** \
  如果样式中引入背景图片过大，可以适当的调大 *webpack.config.js* 里面的 __url-loader__ 的 __limit__ 的参数，但是这样做或许会让你的JS文件过大。\
  (综上：不推荐使用大图片做背景图，可以做一些适当的压缩或者使用img标签引用)。
  -  经过测试，在pages的页面文件夹中，也可以不用vue，使用普通的页面也可以压缩打包。详见CommonPages文件夹，但同样不推荐使用大图片做背景图
  -  mock文件夹下是使用express启动一个前端服务，便于模拟数据接口。使用方法见已有代码，启动方法：npm run server
  -  common/service/server.js 可以存放项目的所有接口请求，然后在*.vue中使用。(后续会把axios继续封装Promise)
  - 使用了px2rem配合淘宝之前的flexible伸缩布局转换css单位,已经排除了node_modules里面的三方插件样式转换。因为三方插件的样式各种各样，不可能做到完全的自适应。需要转换的话可以去postcss.config里面删除

        "postcss-px2rem-eliminate": {
          baseDpr: 2,
          remUnit: 37.5,
          exclude: /node_modules/  //删除该行
        }
        
  - 在pages里面的*.vue组件的style样式区域，禁止使用scope属性!

