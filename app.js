const express = require('express')
const app = express()
const port = process.env.PORT || 8080
const path = require('path')

app.use(express.static('public'))

app.listen(port, ()=> console.log(`example listening on port ${port}!`))