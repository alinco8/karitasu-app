const http = require('http');
const express = require('express');
const vhost = require('vhost');

const app = express();
const main = express();
const api = express();
const port = process.env.PORT || 3000;

main.get('/', (req, res) => {
    res.sendFile(__dirname + '/pages/top.html');
});
api.get('/', (req, res) => {
    res.send('Welcome to api!');
});

app.use(vhost('alinco8.com', main));
app.use(vhost('www.alinco8.com', main));
app.use(vhost('api.alinco8.com', main));

app.listen(port, () => {
    console.log('Server listen on port: %d', port);
});
