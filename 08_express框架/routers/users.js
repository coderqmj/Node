/**
 * 请求所有用户信息：get /users
 * 请求某个用户的信息：get /users/:id
 * 请求所有的某个用户信息：post/users body {user: , password}
 * 删除
 * 某个
 */

 const express = require('express');

 const router = express.Router();

 router.get('/', (req, res, next) => {
   res.json(["qmj", "kobe", "xiaoming"]);
 })

 router.get('/:id', (req, res, next) => {
   res.json(`${req.params.id}用户信息`)
 })

 router.post('/', (req, res, next) => {
  res.json("创建用户成功");
})

module.exports = router;