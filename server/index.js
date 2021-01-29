const express = require('express')
const app = express()
const catCtrl = require('./controllers/catalog-controller.js')

app.use(express.json())

app.get('/api/songs', catCtrl.sendSongs)

const port = 4040
app.listen(port, () => {
    console.log(`server listening to port ${port}`)
})