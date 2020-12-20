const EventEmitter = require('events');

// 创建发射器
const emitter = new EventEmitter();

const listener2 = (args1, args2 ,args3) => {
  console.log('监听到click2事件',args1, args2 ,args3);
}
const listener3 = (args1, args2 ,args3) => {
  console.log('监听到click3事件',args1, args2 ,args3);
}
// 监听一次 
emitter.once('click', listener2)
emitter.prependListener('click', listener3)

// 3.发出一个事件 
setTimeout(() => {
  emitter.emit('click', 'qmj', 'link', 'kobe');
  emitter.removeAllListeners()
}, 2000);

// 取消监听