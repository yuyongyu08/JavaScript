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

    start() {
        this.wp.on("change", function(filePath, mtime, explanation) {
            // filePath: the changed file
            // mtime: last modified time for the changed file
            // explanation: textual information how this change was detected

            console.log('Starting build...')
        });
    }

    build() {
        console.log('Starting build...');
    }
}

module.exports = Watcher