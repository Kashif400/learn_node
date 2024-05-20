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
const port = 5000;
const student = ['kashif', 'adil', 'aqib', 'haroon', 'wasi'];
const teacher = ['pro ihsan', 'pro rahat', 'pro haris', 'pro ijaz'];

const app = express();
app.use(express.urlencoded())
app.use(express.json())
app.all('/', function (req, res, next) {
    res.send('<h1>Welcome</h1>')
})

//get method

app.get('/user', function (req, res, next) {
    res.json({student:student,teacher:teacher})
})

//post method
app.post('/add_user', function (req, res) {
    console.log('req.body :' , req.body)
    const { name } = req.body;
    student.push(name);
    res.status(201).send({student})
})

//dynamic rout
app.get('/user/:userId', function (req, res) {
    console.log(req.params)

    const { userId } = req.params;
    const user = student[userId]
    if (!user) {
        return res.status(404).send('User not found')
    }
    res.status(200).send({
        user
    })
})

app.listen(port, function () {
    console.log('server is running task 1')
})