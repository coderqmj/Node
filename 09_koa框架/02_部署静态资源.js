const Koa = require('koa');

const koaStatic = require('koa-static');
const app = new Koa();
app.use(koaStatic('./build'));
app.listen(8000, () => {
  console.log("服务器启动成功")
})