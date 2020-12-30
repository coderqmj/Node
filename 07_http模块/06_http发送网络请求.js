const http = require('http');

http.get('http://localhost:1732', (res) => {
  res.on('data', (data) => {
    console.log(data.toString())
  })
  res.on('end', () => {
    console.log('结束')
  })
})

