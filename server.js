const http = require('http');
const fs = require('fs');

const port = 3000;

const server = http.createServer(async (req, res) => {
    fs.readFile('./index.html', (err, html) => {
        if (err) {
            throw err;
        }
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/html');
        res.write(html);
        res.end();
    })
});

server.listen(port);

// fs.readFile('./index.html', (err, html) => {
//     if (err) {
//         throw err;
//     }
//     const server = http.createServer((req, res) => {
//         console.log('got request', req);
//         res.statusCode = 200;
//         res.setHeader('Content-type', 'text/html');
//         res.write(html);
//         res.end();
//     })
//     server.listen(3000);
// });
