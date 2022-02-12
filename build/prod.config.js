//导入webpack-merge包
const webpackMerge = require('webpack-merge')

// 压缩文件插件
const UglifyjsWebpackPlugin = require('uglifyjs-webpack-plugin')



// 导入公共的依赖
const baseConfig = require('./base.config')

// 导出
module.exports = webpackMerge(baseConfig, {
    plugins: [
      new UglifyjsWebpackPlugin()
    ]
  })