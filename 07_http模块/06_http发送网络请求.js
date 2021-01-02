const http = require('http');

// 1.get请求
// http.get('http://localhost:1732', (res) => {
//   res.on('data', (data) => {
//     console.log(data.toString())
//   })
//   res.on('end', () => {
//     console.log('结束')
//   })
// })

// 2.post请求 和get不一样，他需要做一个end操作，get内部已经实现了

const req = http.request({
  method: 'POST',
  hostname: 'localhost',
  port: '1732',
}, (res) => {
  res.on('data', (data) => {
    console.log(data.toString())
  })
  res.on('end', () => {
    console.log('结束')
  })
})
req.end()