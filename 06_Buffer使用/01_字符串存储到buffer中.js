const fs = require('fs');
const message = "你好啊";

// 创建Buffer方式一
// const buffer = new Buffer(message);

// console.log(buffer) // <Buffer 48 65 6c 6c 6f> 16进制

// // 创建Buffer方式二
// const buffer = Buffer.from(message, 'utf16le')
// console.log(buffer)

// // 创建Buffer方式三
// const buffer2 = Buffer.alloc(8);
// console.log(buffer2)

// // 读取文本文件
// fs.readFile('./foo.txt',(err, data)=> {
//   console.log(data) // 是一个buffer
//   console.log(data.toString()) // 默认utf-8解码，得到正规字符
// })

// 读取图片文件
fs.readFile('./D_NO_BJ_INT.png',(err, data)=> {
  console.log(data)

  // 复制文件
  fs.writeFile('./didi.png', data, err => {
    console.log(err)
  })

  // 裁剪文件
})