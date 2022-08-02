const http = require('http');
const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Welcome to api!');
});

app.listen(port, () => {
    console.log('Server listen on port: %d', port);
});
