const fs = require('fs');
const sharp = require('sharp')
// 读取图片文件
// fs.readFile('./D_NO_BJ_INT.png',(err, data)=> {
//   console.log(data)

//   // 复制文件
//   fs.writeFile('./didi.png', data, err => {
//     console.log(err)
//   })

//   // 裁剪文件
// })

sharp('./didi.png')
  .resize(200, 200)
  .toFile('./DIDI.png')