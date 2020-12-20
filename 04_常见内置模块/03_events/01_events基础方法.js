const EventEmitter = require('events');

// 创建发射器
const emitter = new EventEmitter();

// 2.监听某一个事件
// on是addListener的别名、

const listener2 = (args) => {
  console.log('监听到click2事件',args);
}
emitter.on('click', listener2)
emitter.on('click', args => {
  console.log('监听click1事件', args)
})

// 3.发出一个事件 
setTimeout(() => {
  emitter.emit('click', 'qmj', 'link', 'kobe');
  emitter.off('click',listener2)
  emitter.emit('click', 'qmj', 'link', 'kobe');
}, 2000);

// 取消监听