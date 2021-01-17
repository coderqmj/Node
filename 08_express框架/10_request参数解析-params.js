// 1.导入
const express = require('express');

// 2.创建app
const app =  express();

// 4.做出处理
app.get('/products/:id/:name', (req, res, next) => {
  console.log(req.params);
  res.end('获取商品数据详情~')
})

app.get('/login', (req, res, next) => {
  console.log(req.query)
  res.end('登陆成功')
})
// 3.启动监听
app.listen(8000, () => {
  console.log('服务器启动成功~')
})