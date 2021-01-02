const express = require('express');

const app =  express();

// 路径匹配中间件
app.use('/home', (req, res, next) => {
  res.end('Welcome to Home~')
})

app.listen(8000, () => {
  console.log('服务器启动成功~')
})