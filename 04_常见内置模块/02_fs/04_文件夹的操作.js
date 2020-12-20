const fs = require('fs');
const path = require('path')

// 1.创建文件夹
const dirname = './qmj';
if(!fs.existsSync(dirname)) {
  fs.mkdir(dirname, err => {
    if(err) console.log(err)
  })
}

// 2.读取文件夹中的所有文件
const getFilename = (dirname) =>{
  fs.readdir(dirname,{withFileTypes: true}, (err,files)=>{
    for(let file of files) {
      if(file.isDirectory()) {
        const filepath = path.resolve(dirname,file.name)
        getFilename(filepath)
      }else {
        console.log(file)
      }
    }
  })
}
getFilename(dirname)
// Dirent { name: 'bb.txt', [Symbol(type)]: 1 }
// Dirent { name: 'qmj.txt', [Symbol(type)]: 1 }
// Dirent { name: 'aa.js', [Symbol(type)]: 1 }
// Dirent { name: 'cc.png', [Symbol(type)]: 1 }

// 3.