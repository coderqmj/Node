const path = require('path');
const basePath = '/User/qmj';
const fileName = 'abc.txt';

const filepath = path.resolve(basePath, fileName)

console.log(filepath)