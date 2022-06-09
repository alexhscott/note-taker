const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;
var favicon = require('serve-favicon')
var path = require('path')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))

app.get('/hello-world', (req, res) => {
  res.sendFile(path.join(__dirname, './public/index.html'));
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
