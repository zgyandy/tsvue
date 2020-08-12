# tsvue

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

### 自定环境变量
示例：
.evn.sit 文件
只有以 VUE_APP_ 开头的变量会被 webpack.DefinePlugin 静态嵌入到客户端侧的包中。
除了默认的BASE_URL 和 NODE_ENV 自定义的环境变量必须以 VUE_APP_* 开头
```
VUE_APP_API=sit

```
package.json
```
  scripts: {
    "sit": "vue-cli-service serve --mode sit",
  }
```
