const http = require('http');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/top.html');
});

app.listen(port, () => {
    console.log('Server listen on port: %d', port);
});
