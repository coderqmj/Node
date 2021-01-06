// 1.导入
const express = require('express');

// 2.创建app
const app =  express();

// 部署
app.use(express.static('./build'));

// 3.启动监听
app.listen(8000, () => {
  console.log('服务器启动成功~')
})