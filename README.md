### VueJs多页面模版

#### 使用方法：

    yarn install

    yarn dev    // 开发环境，localhost:7290
    
    yarn build  // 打包生成dist目录
    
    yarn server  // 在dist目录启动一个服务
    
    yarn mock // 启动express,监听localhost:3333

#### 注意事项：

  -  mock文件夹下是使用express启动一个前端服务，便于模拟数据接口。使用方法见已有代码，启动方法：npm run server
  -  common/service/server.js 可以存放项目的所有接口请求，然后在*.vue中使用。(后续会把axios继续封装Promise)
        
  - 在pages里面的*.vue组件的style样式区域，禁止使用scope属性!
  - build完成之后建议在dist文件夹使用 http-server 类似的服务，查看打包之后页面打开效果。直接双击打开无效

    例子：
    
        http-server -o -p 7729 -P http://localhost:3333

