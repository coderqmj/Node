// 一个模块

const name = 'qmj'
const age = 18;
let message = 'my name is qmj';

function sayHello() {
  console.log(message+name+age)
}

exports.name = name;
exports.age = age;
exports.sayHello = sayHello;