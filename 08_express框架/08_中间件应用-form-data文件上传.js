const path = require('path');

const express = require('express');
const multer = require('multer');

const app = express();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, './upload/');
  },
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  }
})

const upload = multer({
  // dest: './upload/'
  storage
});

app.use(upload.any());  // 非文件类型用any

app.post('/upload', upload.single('file') , (req, res, next) => {
  console.log(req.body)
  res.end("文件上传成功")
})

app.listen(8000, () => {
  console.log("form-data解析服务器启动成功~")
})