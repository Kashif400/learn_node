const express = require('express');
const path = require('path');
const port = 5000;
const student = ['kashif', 'adil', 'aqib', 'haroon', 'wasi'];
const teacher = ['pro ihsan', 'pro rahat', 'pro haris', 'pro ijaz'];

const app = express();

app.get('/', function (req, res, next) {
    // res.json({student:student,teacher:teacher})
    //how to send a full html file 
    res.sendStatus(200).sendFile(path.join(__dirname,'view/home.html'))
})


app.listen(port, function () {
    console.log('server is running task 1')
})