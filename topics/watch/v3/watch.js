let Watchpack = require("watchpack")

class Watcher {
    constructor(options) {
        this.options = options

        this.wp = new Watchpack({
            aggregateTimeout: 1000,
            poll: true,
            followSymlinks: true,
            ignored: "**/.git"
        })

        this.wp.watch(
            [],
            [this.options.path],
            [],
            Date.now() - 10000
        )
    }

    start(cb) {
        console.log('Starting watch...')

        this.wp.on("change", function(filePath, mtime, explanation) {
            console.log('Starting build...')
            console.log(filePath, mtime, explanation);
            cb && cb()
        });
    }
}

module.exports = Watcher