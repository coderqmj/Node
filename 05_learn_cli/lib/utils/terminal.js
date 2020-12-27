/**
 * 执行终端命令相关的代码
 */
// 导入子进程模块, 开启另外一个进程
const { spawn } = require('child_process');
const { resolve } = require('path');

const commandSpawn = (...args) => {
  return new Promise((resolve, reject) => {
    const childProcess = spawn(...args);
    childProcess.stdout.pipe(process.stdout); // 打印进程信息
    childProcess.stderr.pipe(process.stderr); // 错误信息
    childProcess.on('close', () => {  // 监听是否执行完
      resolve()
    })

  })
}

module.exports = {
  commandSpawn
}