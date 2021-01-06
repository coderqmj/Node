// 1.导入
const express = require('express');

// 2.创建app
const app =  express();


// 缺点 重复代码，和业务逻辑一起代码混乱
app.post('/login', (req, res, next) => {
  // 假如在数据中查询用户名是，发现不存在
  const isLogin= true;
  if(isLogin) {
    res.json("user login success~")
  }else {
    res.type(400);
    res.json("username does noit exists~")
  }
})

app.post('/register', (req, res, next) => {
  // 假如在数据中查询用户名是，发现不存在
  const isExist= true;
  if(isLogin) {
    res.json("user register success~")
  }else {
    res.type(400);
    res.json("username already exists~")
  }
})

// 正确的做法是使用错误的中间件

// 3.启动监听
app.listen(8000, () => {
  console.log('服务器启动成功~')
})