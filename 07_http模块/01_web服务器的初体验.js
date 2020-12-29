const http= require('http');

// 创建一个web服务器
const server = http.createServer((req ,res) => {
  res.end('hello server!!')
})

// 监听端口
server.listen(1732, '0.0.0.0', () => {
  console.log('服务器启动在1732端口')
});