const express = require('express');
const path = require('path');
const http = require('http');

const app = express();

const port = 8080;

app.use(express.static(path.join(__dirname, 'build')));

app.get('/*', (req, res) => { res.sendFile(path.join(__dirname, 'build', 'index.html')) });

app.get('/healthcheck', (req, res) => {
    console.info('Covid Dashboard is healthy.')
    return res.status(200).json({ message: 'Covid Dashboard is healthy.' })
});

http.createServer(app).listen(port, () => console.info(`running on port: ${port}`));