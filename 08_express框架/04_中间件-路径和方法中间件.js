// 1.导入
const express = require('express');

// 2.创建app
const app =  express();

// 4.做出处理
app.get('/home', (req, res, next) => {
  res.end('Hello express!')
})

app.post('/login', (req, res, next) => {
  res.end('Please login~')
})

// 3.启动监听
app.listen(8000, () => {
  console.log('服务器启动成功~')
})