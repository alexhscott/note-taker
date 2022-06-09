const path = require('path');
const express = require('express')
const app = express()
const PORT = process.env.PORT || 3001;

app.get('/', (req, res) => {
    console.log("hey")
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`)
})
