const mysql = require('mysql2');

// 1.创建连接
const connection = mysql.createConnection({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: '12345678'
})

// 2.执行mysql语句
const statement = `
  select * from products where price > 6000 and score > 7
`

// 这种方式不安全，效率低，且容易被注入
connection.query(statement, (err, res, fields) => {
  console.log('err=>', err);
  console.log('res=>', res);
  console.log('fields=>', fields);
  // 拿到结果后终止
  connection.end();
})

