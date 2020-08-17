const open = require('open');
const path = require('path')
const { exec } = require('child_process');

const express = require('express')
const app = express()
const port = 3000

app.use('/static', express.static('dist'))
app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/src/index.html')))
app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)

    exec('npm run build');

    open(`http://localhost:${port}`)
})
