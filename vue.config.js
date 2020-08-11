const webpack = require('webpack');
const path = require('path');
const isProd = process.env.NODE_ENV === 'production'
console.log(isProd, '---isProd');

module.exports = {
  css:{
    sourceMap: true
  },
  configureWebpack: {
    devtool: 'source-map',
    devServer: {
      port: 9090,
      sockHost: 'http://localhost:9090',
      disableHostCheck: true
    }
  },

  chainWebpack: config => {
    config
      .module
      .rule('ts')
      .test(/.ts$/)
      .use('ts-loader')
      .loader('ts-loader')
      .end();
    config
      .module
      .rule('jsx')
      .test(/.jsx$/)
      .use('babel-loader')
      .loader('babel-loader')
      .end();

    config.module
      .rule('svg')
      .exclude.add(path.resolve(__dirname, './src/icons'))
      .end();
    config.module
      .rule('icons')
      .test(/\.svg$/)
      .include.add(path.resolve(__dirname, './src/icons'))
      .end()
      .use('svg-sprite-loader')
      .loader('svg-sprite-loader')
      .options({
        symbolId: 'icon-[name]'
      })
      .end();
    config.module
      .rule('md')
      .test(/\.md$/)
      .use('html-loader')
      .loader('html-loader')
      .end()
      .use('markdown-loader')
      .loader('markdown-loader')
      .end();
  }
};
