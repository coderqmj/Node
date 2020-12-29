const http= require('http');

// 创建server的两种方式
const server1 = http.createServer((req ,res) => {
  res.end('hello server1')
})

const server2 = new http.Server((req, res) => {
  res.end("hello2")
})
// 监听端口
server1.listen(1733, '0.0.0.0', () => {
  console.log('服务器启动在1733端口')
});
// server2.listen(1734, '0.0.0.0', () => {
//   console.log('服务器启动在1734端口')
// });