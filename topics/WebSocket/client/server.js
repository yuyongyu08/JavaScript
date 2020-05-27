const express = require('express')
const app = express()
const port = 8080
const path = require('path')

app.use(express.static('client/dist'))

app.get('/', (req, res) => res.sendFile(path.join(__dirname, '/index.html')))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
