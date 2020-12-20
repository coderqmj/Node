const fs = require('fs')

const content = '吃了吗？hahh'

fs.writeFile('./a.txt',content,{flag: "a"}, err => {
  if(err) console.log(err)
})