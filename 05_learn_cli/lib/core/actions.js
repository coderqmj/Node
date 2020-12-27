const { promisify } = require('util');

const download = promisify(require('download-git-repo'));
const open = require('open');

const { vueRepo } = require('../config/repo-config');
const { commandSpawn } = require('../utils/terminal')

const createProjectAction = async (project) => {
  console.log("qmj helps you create your project~")
  // 1.clone项目
  await download(vueRepo, project, {clone: true});
  // 2.执行npm install
  // 注意，下面代码在win上面会报错。在mac上可以 ，需要判断操作系统
  // await commandSpawn('npm', ['install'], {cwd: `./${project}`})
  const command = process.platform === 'win32' ? 'npm.cmd' : 'npm';
  await commandSpawn(command, ['install'], {cwd: `./${project}`})

  // 3.运行npm run serve
  commandSpawn(command, ['run', 'serve'], {cwd: `./${project}`})
  // 4.打开浏览器
  open("http://localhost:8080")
}

module.exports = {
  createProjectAction
}