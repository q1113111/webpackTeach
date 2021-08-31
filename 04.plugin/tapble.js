const {
  SyncHook,
  SyncBailHook,
  SyncWaterfallHook,
  SyncLoopHook,
  AsyncParallelHook,
  AsyncParallelBailHook,
  AsyncSeriesHook,
  AsyncSeriesBailHook
} = require('tapable')

class Lesson {
  constructor() {
    // 初始化hooks容器
    this.hooks = {
      // 同步 會依序執行
      // go:new SyncHook(['address']) 使用return 一樣會執行
      go: new SyncBailHook(['address']), // 遇到return返回

      // 異步 異步併行
      // leave: new AsyncParallelHook(['name', 'age'])

      // 異步串行
      leave:new AsyncSeriesBailHook(['name','age'])
    }
  }
  tap() {
    // 往hooks容器中註冊事件/添加回調函數
    this.hooks.go.tap('class0318', (address) => {
      console.log('class0318', address)
      return 111
    })
    this.hooks.go.tap('class0410', (address) => {
      console.log('class0410', address)
    })
    this.hooks.leave.tapAsync('class0510',(name,age,cb)=>{
      setTimeout(()=>{
        console.log('class0510',name,age)
        cb()
      },2000)
    })
    this.hooks.leave.tapPromise('class0610',(name,age)=>{
      return new Promise((reslove)=>{
        setTimeout(()=>{
          console.log('class0610',name,age)
        },1000)
      })
    })
  }
  start() {
    // 觸發hooks
    this.hooks.go.call('c318'),

    // 
    this.hooks.leave.callAsync('Sam',18,()=>{
      // 代表所有事件都處理完成 callback 
      console.log('end')
    })
  }
}
const l = new Lesson()
l.tap()
l.start()
