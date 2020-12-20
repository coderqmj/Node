const fs = require('fs')

// 读取文件信息
const filepath = "./a.txt"

// 1.方式一：同步操作 阻塞
const info = fs.statSync(filepath)
console.log(info)

// 2.方式二：异步操作 不会阻塞
fs.stat(filepath, (err)=> {
  if(err) {
    console.log(err)
    return;
  }
  console.log(info)
})
// 3.方式三 promise的方式，不会回调地狱
fs.promises.stat(filepath).then( info => {
  console.log(info);
}).catch(err => {
  console.log(err)
})