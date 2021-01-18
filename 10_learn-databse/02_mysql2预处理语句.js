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
  select * from products where price > ? and score > ?
`

connection.execute(statement, [6000,7], (err, res) => {
  console.log(res)
})