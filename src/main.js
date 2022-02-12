// 用commonJs导入
var {name,age,sum} = require('./js/main1.js')

console.log(name);
console.log(age);
sum(1,2)

// 用commonJs导入css
require('./css/index.css')

// 导入less
require("./css/special.less")
document.writeln("<span>bbb</span>")

// 用es6导入vue进行开发
import Vue from "vue"
// import App from "./vue/app.js"
import App from './vue/App.vue'

const app = new Vue({
    el: "#app",
    template: `
       <App/>
    `,
    // 局部组件
    components: {
        // App:App 简写
        App
    }
})

