const fs = require('fs')

fs.open("./a.txt",(err,fd) => {
  if(err) {
    console.log(err)
    return
  }

  // 可以通过描述符去获取文件的信息 异步
  fs.fstat(fd, (err, info) => {
    console.log(info)
  })
  console.log(fd)  // 先被执行
})