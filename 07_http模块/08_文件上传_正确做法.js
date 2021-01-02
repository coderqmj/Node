const http= require('http');
const fs = require('fs');
const qs = require('querystring');

// 错误写法
const server = http.createServer((req ,res) => {
  if(req.url === '/upload') {
    if(req.method === 'POST') {
      req.setEncoding('binary');
      let body = '';
      const totalBoundary = req.headers['content-type'].split(';')[1];
      const boundary = totalBoundary.split('=')[1];
      req.on('data', (data) => {
        body += data;
      });

      req.on('end', ()=> {
        console.log(body)
        // 处理body
        // 1.处理img前面的问题
        const payload = qs.parse(body, "\r\n", ":")
        const type = payload["Content-Type"]; // 拿到图片类型
        // 拿到图片的位置
        const typeIndex = body.indexOf(type);
        const typeLength = type.length;
        let imageData = body.substring(typeIndex+typeLength )

        // 3.去掉空格
        imageData = imageData.replace(/^\s\s*/, '');
        
        // 4.将最后的boundary去掉
        imageData = imageData.substring(0, imageData.indexOf(`--${boundary}--`)) 
        fs.writeFile('./foo.png', imageData, {encoding: 'binary'}, (err) => {
          console.log('文件上传成功')
        })
        console.log('文件上传成功！！');
        res.end('文件上传成功~')
      })
    }
  }
})

// 监听端口
server.listen(1733, '0.0.0.0', () => {
  console.log('服务器启动在1732端口')
});