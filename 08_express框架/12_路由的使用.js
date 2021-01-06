// 1.导入
const express = require('express');
const userRouter = require('./routers/users')

// 2.创建app
const app =  express();

app.use("/users",userRouter);



// 3.启动监听
app.listen(8000, () => {
  console.log('服务器启动成功~')
})