// koa导出的是application类，所以取名应该大写。 
const Koa = require('koa');

const app = new Koa();

app.use((ctx, next) => {
  ctx.response.body = "hello qmj";
})

// 和repress的区别 就是没有end的时候就会挂起，一直请求，而Koa会返回Not Found  
app.listen(8000, () => {
  console.log("服务器启动成功")
})