自动化测试前端部分
======

[dome](https://meikang123.github.io/uiFramework/dist/#/index)

## init

```shell
# 安装依赖
npm/yarn install

# 同步公用代码
npm run download
# 或
yarn download
```

## 公用代码定义

```javascript
// package.json
...
"framework": {
    "name": "spa-vue-admin",
    "address": "qqdz@192.168.39.184:frontend/giant-spa-vue-admin-framework.git",
    "branch": "dev"
}
...
```

### 开发及联调
```shell
npm run dev
# 或
yarn dev
```

### 测试/生产环境发布

```shell
# ST 测试环境
npm/yarn run build:st

# PRODUCTION 生产环境
npm/yarn run build
```

#### 分环境配置文件
```javascript
// src/config/base.js
export const Config = {
  /**
   * @description 开发联调环境
   *
   */
  DEVELOPMENT: {
    requestUrl: 'http://192.168.96.75:8787',
    wsUrl: '//192.168.96.75:8787'
  },
    /**
   * @description 测试环境/内网环境
   *
   */
  ST: {
    requestUrl: 'http://192.168.189.71:8787',
    wsUrl: '//192.168.189.71:8787'
  },
  // ...
}

```

### Lints and fixes files
```javascript
// 待定
```
