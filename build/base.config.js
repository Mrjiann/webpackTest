// 在node全局里面导入path包
const path = require('path')
const webpack = require('webpack')
const HtmlWebpackPlugin = require('html-webpack-plugin')

// 导出
module.exports = {
    // 入口,把main打包
    entry: './src/main.js',
    // 出口，不打包到bundle
    output: {
        // 路径
        // path模块里面有resolve()这个函数，可以把两个路径做一个拼接
        // dirname:node自带的全局变量
        path: path.resolve(__dirname, '../dist'),
        // 文件名
        filename: 'bundle.js',
        // publicPath: 'dist/'
    },
    module: {
        rules: [
            {
                test: /\.css$/,
                use: ['style-loader', 'css-loader']
            },
            {
                test: /\.less$/,
                use: [{
                    loader: "style-loader", // creates style nodes from JS strings
                }, {
                    loader: "css-loader" // translates CSS into CommonJS
                }, {
                    loader: "less-loader", // compiles Less to CSS
                }]
            },
            {
                test: /\.(png|jpg|gif|jpeg)$/,
                use: [
                    {
                        loader: 'url-loader',
                        options: {
                            // 当加载的图片, 小于limit时, 会将图片编译成base64字符串形式.
                            // 当加载的图片, 大于limit时, 需要使用file-loader模块进行加载.
                            limit: 13000,
                            name: 'img/[name].[hash:8].[ext]'
                        },
                    }
                ]
            },
            {
                //ES6->ES5
                test: /\.js$/,
                exclude: /(node_modules|bower_components)/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['es2015']
                    }
                }
            },
            {
                test: /\.vue$/,
                use: ['vue-loader']
            }
        ]
    },
    resolve: {
        // alias: 别名
        // extensions: ['.js', '.css', '.vue'],
        alias: {
            'vue$': 'vue/dist/vue.esm.js'
        }
    },
    plugins: [
        new webpack.BannerPlugin("最终版权归zhz所有"),
        new HtmlWebpackPlugin({
            template: 'index.html'
        })
    ]
}