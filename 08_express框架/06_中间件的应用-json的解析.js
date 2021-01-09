const express = require('express');

const app =  express();


// 手动判断，内部有已经实现好的
// app.use((req, res, next) => {
//   console.log(req.headers['content-type'])
//   if(req.headers['content-type'] === 'application/json') {
//     req.on('data', (data) =>{
//       const info = JSON.parse(data.toString());
//       req.body = info;
//     })

//     req.on('end', () => {
//       res.end('haha');
//       next();
//     })
//   } else {
//     next();
//   }
// })

app.use(express.json())

app.post('/login', (req, res, next) => {
  console.log(req.body);
  res.end('hhahah')
  req.on('end', () => {
    res.end('qmj, Welcome Back~');
  })
})
app.post('/products', (req, res, next) => {
  console.log(req.body);
  res.end('hhahah')
  req.on('end', () => {
    res.end('qmj, Welcome Back~');
  })
})

app.listen(8000, () => {
  console.log('服务器启动成功~')
})