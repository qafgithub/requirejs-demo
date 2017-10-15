# requires 使用
## 在node,npm环境下使用
+ 下载到项目文档
- npm install --save requirejs
+ 引入到html页面
``` javascript
<script data-main="scripts/main.js" src="scripts/require.js"></script>
```
+ 注意事项
1.  除了 data-main 的入口模块使用 require 调用执行
2. 其它模块都使用 define 方法来定义

+ require方法 参数
1.  第一个参数用来声明依赖项，被加载的依赖项不要加 .js 后缀
2. 第二个参数是一个回调函数，用来接收和编写模块代码

+ define 参数
1. 


