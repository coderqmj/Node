const http = require('http')
var server = http.createServer((req, res) => {
  res.writeHead(200, { "Content-type": "text/html;charset=UTF-8" })
  console.log('启动')
  res.end("node页面")
})

server.listen(3000)