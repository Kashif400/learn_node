const express = require('express');
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
    res.json({student:student,teacher:teacher})
})

app.post('/add_user', function (req, res) {
    console.log('res.bod :'+ res.bo)
})

app.listen(port, function () {
    console.log('server is running task 1')
})