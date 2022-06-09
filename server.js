const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/public/index.html'));
    console.log(__dirname);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
})
