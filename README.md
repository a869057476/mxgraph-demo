<!--
 * @Descripttion: 
 * @version: 
 * @Author: huangwei
 * @Date: 2021-03-21 14:41:42
 * @LastEditors: huangwei
 * @LastEditTime: 2021-03-22 21:35:15
-->
# mxGraph-demo
## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Lints and fixes files
```
npm run lint
```

### Customize configuration
See [Configuration Reference](https://cli.vuejs.org/config/).

# mxGraph踩坑总结
## 要点1
```
exports-loader需要选用0.7.0版本，不要安装最新版1.0.0，否则会报错
安装命令npm install exports-loader@0.7.0 --save-dev
```