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


//dynamic route
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