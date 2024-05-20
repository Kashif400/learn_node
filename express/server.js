// const http = require('http');
// const port = 4000;

// function requestHandler(req, res) {
//     const { url, method } = req;
//     if (url === "/") {
//         res.statusCode = 200;
//         res.end('<h1>Welcome to Home Page</h1>');
//     } else
//         if (url === "/user") {
//             res.statusCode = 200;
//             res.end('<h1>Welcome to User Page</h1>');
//         } else {
        
//         res.statusCode = 404;
//         res.end('<h1>Invlide Url...</h1>');
//     }
// }

// const server = http.createServer(requestHandler);
// server.listen(port, function () {
//     console.log('server is running ' + port);
// });

const express = require('express');

const users = ['kashif', 'wasi', 'adil', 'aqib', 'asmi']
const port = 4000;

const app = express()
app.use(express.urlencoded());
app.use(express.json);


// app.all('/', function (req, res, next) {
//     res.send('<h1>Welcom</h1>')
// })



app.get('/user', function (req, res, next) {
    res.json({users:users})
})


app.post('/add_user', function (req, res) {
    console.log('res.body :' + res.body);
    const { name } = req.body;
    users.push(name);

    res.send({users})
})

app.listen(port, function () {
    console.log('server is running')
})