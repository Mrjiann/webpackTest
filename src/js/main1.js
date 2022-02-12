const name = "zhz";
const age = 18;

function sum(num1,num2){
    console.log(num1+num2);
}

// 用commonJs导出
module.exports = {
    name,
    age,
    sum
}