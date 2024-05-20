const http = require('http');
const { generateHtml } = require('./utils');
// ismi hum kesi file data write karti hai
const fs = require('fs');

function requestHandler(req, res) {
    const { url, method } = req;
    
    if (url === '/') {  res.statusCode = 200;
        res.end(generateHtml('Home Page', '<h1>Welcome to Home Page...</h1>'));
    } else if (url === '/user' && method === 'GET') {
          res.statusCode = 200;
        res.end(generateHtml('Add User', "<form action='/user' method='POST'><input type='text' name='email'><input type='submit'></form>"));
       
    } else if (url === '/user' && method === 'POST') {
        const data = [];

        //event listener 
        req.on('data', function (chunk) {
            data.push(chunk);
        });

        //event fire 
        req.on('end', function () {
            console.log('data received ', data);

            //they convert buffer to string
            const result = Buffer.concat(data).toString();

            //create a file to store data in file
            fs.writeFileSync('body.txt', result);
            

            res.end(result);
        });
    } else {
          res.statusCode = 404;
        res.end(generateHtml('Not Found.', '<h1>Invlid Page...</h1>'));
    }
};

const server = http.createServer(requestHandler);
server.listen(4000);