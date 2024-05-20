const express = require('express');
const path = require('path');
const port = 5000;
const student = ['kashif', 'adil', 'aqib', 'haroon', 'wasi'];
const teacher = ['pro ihsan', 'pro rahat', 'pro haris', 'pro ijaz'];

const app = express();
app.all('/', function (req, res, next) {
    res.send('<h1>Welcome</h1>')
})

app.get('/user', function (req, res, next) {
    res.json({student:student,teacher:teacher})
})

app.get('/user', function (req, res, next) {
    // res.json({student:student,teacher:teacher})
    console.log('student and teacher data show')
    next()
})
app.get('/user', function (req, res, next) {
    // res.json({student:student,teacher:teacher})
    res.sendStatus(200).sendFile(path.join(__dirname,'view/home.html'))
})

app.post('/add_user', function (req, res) {
    console.log('req.body :' , req.body)
    const { name } = req.body;
    student.push(name);
    res.status(201).send({student})
})

app.listen(port, function () {
    console.log('server is running task 1')
})