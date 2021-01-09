const express = require('express');
const multer = require('multer');

const app = express();

const upload = multer();

app.use(upload.any());  // 非文件类型用any



app.post('/login', (req, res, next) => {
  console.log(req.body)
  res.end("登陆成功")
})

app.listen(8000, () => {
  console.log("form-data解析服务器启动成功~")
})