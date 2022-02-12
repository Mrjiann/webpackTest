//导入webpack-merge包
const webpackMerge = require('webpack-merge')

// 导入公共的依赖
const baseConfig = require('./base.config')

// 导出
module.exports = webpackMerge(baseConfig, {
  devServer: {
    //服务哪个文件夹
    contentBase: './dist',
    //页面实时监听
    inline: true
  }
})