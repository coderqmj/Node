const EventEmitter = require('events');

// 创建发射器
const emitter = new EventEmitter();

// 2.监听某一个事件
// on是addListener的别名、

const listener2 = (args) => {
  console.log('监听到click2事件',args);
}
emitter.on('click', listener2)
emitter.on('tap', args => {
  console.log('监听click1事件', args)
})

// 获取注册事件
console.log(emitter.eventNames())
// 获取注册函数个数
console.log(emitter.listenerCount('click'))
// 获取注册函数名称
console.log(emitter.listeners('click'));