const express = require('express');
const path = require('path');
const port = 4000;
const app = express();

app.use(express.urlencoded());
app.use(express.json());
app.set('view engine', 'ejs');
const products = [];

app.get('/', function (req, res) {
    res.status(200).sendFile(path.join(__dirname, 'view/index.html'));
});

app.post('/products', function (req, res) {
    const { name, price } = req.body;
    products.push({ name, price });
    res.status(201).send('Product created successfully');
});

app.get('/products', function (req, res) {
    // i am pass data dynamicaly pass in html file to show data
    // res.status(200).send({ products });

    res.status(200).render(path.join(__dirname, 'view', 'product.ejs'), { title: 'Products Page',products})
});

app.put('/products/:productIndex', function (req, res) {
    const { name, price } = req.body;
    let { productIndex } = req.params;
    productIndex = Number(productIndex);

    if (!products[productIndex]) {
        return res.status(404).send('Product not found');
    }

    products[productIndex].name = name;
    products[productIndex].price = price;

    res.status(200).send('Product updated successfully');
});

app.delete('/products/:productIndex', function (req, res) {
    let { productIndex } = req.params;
    productIndex = Number(productIndex);

    if (isNaN(productIndex) || productIndex < 0 || productIndex >= products.length) {
        return res.status(404).send('Product not found');
    }

    products.splice(productIndex, 1);

    res.status(200).send('Product deleted successfully');
});

app.listen(port, function () {
    console.log(`Server is running on port ${port}`);
});
