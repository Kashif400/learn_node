const http = require('http');

// const server = http.createServer();

// server.on('request', function (req, res) {
//     res.end('<h1>Welcome to the Node Server');
// });

// server.listen(4000)

//OR Same Method


const server = http.createServer(
     function (req, res) {
    res.end('<h1>Welcome to  Node Server');
});

server.listen(4000)