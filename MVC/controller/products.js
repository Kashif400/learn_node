
const path = require('path');
const connection = require('../model/index');
const Products = require('../model/product');
const { where } = require('sequelize');

module.exports = {
    get: async function (req, res) {
        try {
            const products = await Products.findAll()
            console.log(products)
            res.status(200).send({products})
            // res.status(200).render(path.join(__dirname, '../view/product.ejs'), { title: 'Product Page', products:product })
    
        } catch (error) {
            res.status(500).send('Something went wrong')
        }
    
    },
    getOne: async function (req, res) {
        try {
            let { productId } = req.params;
            const products = await Products.findOne(
                {
                    where: {
                        id:productId
                    }
                }
            )
                res.status(200).send({products})
    
               } catch (error) {
                res.status(500).send('Something went wrong')
             }
    
    },

    post: async function (req, res) {
            const {name,price,available,quantity} = req.body
    try {
        const products = await Products.create({
            name: name,
            price: price,
            available: available,
            quantity:quantity
        });
        res.status(201).send('Product created successfully');
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).send('Something went wrong');
    }
},
    put:async function (req, res) {
        try {
        let { productId } = req.params;
            const { name, price,available,quantity } = req.body;
            const product = await Products.update({
                name,
                price,
                available,
                quantity
            }, {
                where: {
                   id:productId
               } 
            });

        res.status(201).send('Product Updated successfully');
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).send('Something went wrong');
    }
    },

    delete:async function (req, res) {
        let { productId } = req.params;
         await Products.destroy({
            where: {
                id:productId
            }
        })

    res.status(200).send('Product deleted successfully');
}

}


