let fs = require('fs');

class Watcher {
    constructor(options) {
        this.fileMap = new Map()
        this.path = options.path || ''
    }

    start() {
        this.initFileMap()

        while (true) {
            this.readFile(this.path, this.comparer)
        }        
    }

    initFileMap() {
        this.readFile(this.path, (filePath, time) => {
            this.fileMap.set(filePath, time)
        })
    }

    readFile(path, handler){
        let files = fs.readdirSync(path)
        let _this = this

        files.forEach(file => {
            let fileFullPath = `${path}/${file}`
            let stats = fs.statSync(fileFullPath, {bigint: true})
            stats.isDirectory() && this.readFile(fileFullPath, handler)
            stats.isFile() && handler.call(_this, fileFullPath, stats.mtimeMs)
        })
    }

    comparer(filePath, time){
        let originalTime = this.fileMap.get(filePath)

        if(originalTime !== time){
            this.fileMap.set(filePath, time)
            this.build()
        }
    }

    build() {
        console.log('Starting build...');
    }
}

module.exports = Watcher