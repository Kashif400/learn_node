
const path = require('path');
const products = require('../model/index')

module.exports = {
    get:function (req, res) {
        res.status(200).render(path.join(__dirname, '../view/product.ejs'), { title: 'Product Page', products })
    },
    post:function (req, res) {
    const { name, price } = req.body;
    products.push({ name, price });
        res.status(201).send('Product created successfully');
    },
    put:function (req, res) {
    const { name, price } = req.body;
    let { productIndex } = req.params;
    productIndex = Number(productIndex);

    if (!products[productIndex]) {
        return res.status(404).send('Product not found');
    }

    products[productIndex].name = name;
    products[productIndex].price = price;

        res.status(200).send('Product updated successfully');
    },

    delete:function (req, res) {
    let { productIndex } = req.params;
    productIndex = Number(productIndex);

    if (isNaN(productIndex) || productIndex < 0 || productIndex >= products.length) {
        return res.status(404).send('Product not found');
    }

    products.splice(productIndex, 1);

    res.status(200).send('Product deleted successfully');
}

}


