const path = require('path');

// 1.获取路径信息
const filepath = 'User/qmj/abc.txt';

console.log(path.dirname(filepath))
console.log(path.basename(filepath))
console.log(path.extname(filepath));

// 2.join路径拼接

const basepath1 = '/User/qmj';
const filename = 'aaa.txt';
const filepath1 = path.join(basepath1, filename)

console.log(filepath1)

// 3.路径拼接

const filepath2 = path.resolve(basepath1, filename);
console.log(filepath2)