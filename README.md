### 自用VueJs多页面模版

推荐使用 yarn 来管理 node 包
  
#### 使用方法：

  ```js
  yarn install

  yarn dev    // 开发环境，localhost:7290
  
  yarn build  // 打包生成dist目录
  
  yarn server // 启动express,监听localhost:3333
  ```

#### 代码编写
  支持了类的写法

  ```js
  import Vue from 'vue';
  import Component from 'vue-class-component';

  export default @Component({
    components: {},
    watch: {},
  })
  class App extends Vue {
    created() {}
    mounted() {}

    methodOne() {}
    ...
  }
  ```

  同样支持了JSX的写法，但是经过编写尝试发现，如果混合类和JSX的写法会影响代码可观赏性，自我决策的时间就到了~

#### 注意事项：

  - 字体和初始化CSS/Stylus文件在common中存放。在组件中，使用@import导入
  (字体文件必须是在同一个文件夹font/css文件格式)
  -  components文件夹是放公共组件，结构就是普通的*.vue文件
  - 图片使用了 image-webpack-loader 进行压缩，质量可调
  -  mock文件夹下是使用express启动一个前端服务，便于模拟数据接口。使用方法见已有代码，启动方法：npm run server
  -  common/service/server.js 可以存放项目的所有接口请求，然后在*.vue中使用。
  - 在pages里面的*.vue组件的style样式区域，禁止使用scope属性!
  - build完成之后建议在dist文件夹使用 http-server 类似的服务，查看打包之后页面打开效果。直接双击打开无效

    例子：
    
        http-server -o -p 7729 -P http://localhost:3333

