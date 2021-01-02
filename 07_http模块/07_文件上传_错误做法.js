const http= require('http');
const fs = require('fs');

// 错误写法
const server = http.createServer((req ,res) => {
  if(req.url === '/upload') {
    if(req.method === 'POST') {
      const flieWriter = fs.createWriteStream('./foo.png',{flags: 'a+'});
      req.on('data', (data) => {
        console.log(data);
        // 包含着图片+其他信息，所以不能正常显示。
        flieWriter.write(data);
      });

      req.on('end', ()=> {
        console.log('文件上传成功！！');
        res.end('文件上传成功~')
      })
    }
  }
})

// 监听端口
server.listen(1732, '0.0.0.0', () => {
  console.log('服务器启动在1732端口')
});