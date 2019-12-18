let path = require('path')
let Watcher = require('./v1/watch')
// let Watcher = require('./v2/watch')

let dir = path.join(__dirname, './src/list')

let options = {
    path: dir,
    //默认为空，不监听的文件或者文件夹，支持正则匹配
    ignored: /node_modules/,
    //监听到变化发生后会等300ms再去执行，默认300ms
    aggregateTimeout: 300,
    //判断文件是否发生变化是通过不停询问系统指定文件有没有变化实现的，默认每秒问1000次
    poll: 1000
}

let watcher = new Watcher(options)

watcher.start()
