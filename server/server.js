const express = require('express');
const path = require('path');
const app = express();

app.get('/', function(req, res){
    res.sendFile(path.join(__dirname, '../index.html'))
})

app.get('/js', (req, res) => {
    res.sendFile(path.join(__dirname, './server/server.js'))
})


const port = process.env.PORT || 4006;

app.listen(port, () => {
    console.log(`Listening on port ${port}`)
})