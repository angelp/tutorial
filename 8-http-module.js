const http = require('http');

const server = http.createServer((req, res) => {
    console.log(req.url);
    if (req.url === '/') {
        res.end('Welcome to our home page!');
    }
    if (req.url === '/about') {
        res.end('Here is our story');
    }
    res.end(`
        <h1>Oops</h1>
        <p>Page not found!</p>
    `);
});

server.listen(5000);
