const http = require('http');
// const generateHtml =require('./utils')
const {generateHtml} =require('./utils')

function requestHandler(req, res) {
    const { url } = req;
    if (url === '/') {
        res.statusCode = 200;
        res.end(generateHtml('Home Page', '<h1>Welcome to Home Page...</h1>'));
    } else {
        res.statusCode = 404;
        res.end(generateHtml('Page Not Found', '<h1>Invalid Route, Not Found</h1>'));
    }
}

const server = http.createServer(requestHandler);

server.listen(4000);
