const mysql = require('mysql2');

// 1.创建连接池
const connections = mysql.createPool({
  host: 'localhost',
  port: 3306,
  database: 'coderhub',
  user: 'root',
  password: '12345678',
  connectionLimit: 10
})

// 2.使用连接池
const statement = `
  select * from products where price > ? and score > ?
`

connections.promise().execute(statement, [6000,7]).then(([results]) => {
  console.log(results)
}).catch (err => {
  console.log(err)
})
