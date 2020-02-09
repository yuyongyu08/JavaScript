let fs = require('fs');

class Watcher {
    constructor(options) {
        this.fileMap = new Map()
        this.options = options
    }

    start() {
        this.initFileMap()
        
        while (true) {
            this.readFile(this.options.path, this.comparer)
        }
    }

    initFileMap() {
        this.readFile(this.options.path, (filePath, time) => {
            this.fileMap.set(filePath, time)
        })
    }

    readFile(path, handler){
        let files = fs.readdirSync(path)
        let _this = this

        files.forEach(file => {
            let fileFullPath = `${path}/${file}`
            let stats = fs.statSync(fileFullPath)
            stats.isDirectory() && this.readFile(fileFullPath, handler)
            stats.isFile() && handler.call(_this, fileFullPath, stats.mtimeMs)
        })
    }

    comparer(filePath, time){
        let originalTime = this.fileMap.get(filePath)

        if(originalTime !== time){
            this.fileMap.set(filePath, time)

            console.log(originalTime, time);
            
            this.debounce(this.build, this.options.poll)
        }
    }

    build() {
        console.log('Starting build...');
    }

    debounce(cb, wait) {
        let timer = null;
    
        return function () {
            clearTimeout(timer);
            timer = setTimeout(function () {
                cb.apply(this, arguments);
            }, wait)
        }
    }
}

module.exports = Watcher