const express = require('express');

const app = express();

// 编写普通中间件

// 1.use注册中间件
app.use((req, res, next) => {
  console.log("注册了第01个普通中间件~");
  next()
})

app.use((req, res, next) => {
  console.log("注册了第02个普通中间件~");
  next()
})

app.use((req, res, next) => {
  console.log("注册了第03个普通中间件~");
  res.end("hello qmj11111")
})

app.listen(8000, () => {
  console.log("普通中间件服务器启动成功~");
})