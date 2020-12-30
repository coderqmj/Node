const http= require('http');
const url = require('url');
// 创建一个web服务器
const server = http.createServer((req ,res) => {
  // if(req.url === '/login') {
  //   res.end('欢迎回来~');
  // }else if(req.url  === '/users') {
  //   res.end('用户页面')
  // }else {
  //   res.end('请输入正确的url')
  // }
  console.log(url.parse(req.url))
  res.write('okk');
  res.end(('可以了'))
})

// 监听端口
server.listen(1732, '0.0.0.0', () => {
  console.log('服务器启动在1732端口')
});