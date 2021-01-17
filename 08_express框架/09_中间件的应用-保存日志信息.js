const fs = require('fs')
// 1.导入

const express = require('express');
const morgan = require('morgan');
// 2.创建app
const app =  express();

const writerStream = fs.createWriteStream('./logs/access.log', {
  flags: "a+"
})

app.use(morgan("combined", {stream: writerStream}))

app.get('/home', (req, res, next) => {
  res.end("写入日志~")
})

// 3.启动监听
app.listen(8000, () => {
  console.log('服务器启动成功~')
})