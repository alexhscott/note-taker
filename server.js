const path = require('path');
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3001;
var favicon = require('serve-favicon')
var path = require('path')

app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')))


app.get('/helloWorld', (req, res) => {
   // res.sendFile(path.join(__dirname, '/public/index.html'));
    //console.log(__dirname);
    res.send('hey');
})

app.listen(PORT, () => {
  console.log(`Example app listening on port ${PORT}`);
})
