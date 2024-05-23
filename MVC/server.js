const express = require('express');
const path = require('path');
const port = 4000;

//import
const productRouter = require('./routes/product')

const shopRouter = require('./routes/shop')

const app = express();


app.use(express.urlencoded());
app.use(express.json());
app.set('view engine', 'ejs');


app.get('/', function (req, res) {
    res.status(200).sendFile(path.join(__dirname, 'view','index.html'));
});


app.use('/api/products', productRouter);

app.use('/api/shop', shopRouter);

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
