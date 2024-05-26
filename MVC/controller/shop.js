
const path = require('path');
const connection = require('../model/index');
const Shops = require('../model/shop');

module.exports = {
    get: async function (req, res) {
        try {
            const shops = await Shops.findAll()
           
            res.status(200).send({shops})
            // res.status(200).render(path.join(__dirname, '../view/product.ejs'), { title: 'Product Page', products:product })
    
        } catch (error) {
            res.status(500).send('Something went wrong')
        }
    
    },
    getOne: async function (req, res) {
        try {
            let { shopId } = req.params;
            const shop = await Shops.findOne(
                {
                    where: {
                        id:shopId
                    }
                }
            )
                res.status(200).send({shop})
    
               } catch (error) {
                res.status(500).send('Something went wrong')
             }
    
    },

    post: async function (req, res) {
            const {name,stock,available,address} = req.body
    try {
        const shop = await Shops.create({
            name,
            stock,
            available,
            address
        });
        res.status(201).send('Shop created successfully');
    } catch (error) {
        console.error('Error creating product:', error);
        res.status(500).send('Something went wrong');
    }
},
    put:async function (req, res) {
        try {
        let { shopId } = req.params;
            const { name, stock,available} = req.body;
            const product = await Shops.update({
                name,
                stock,
                available,
            }, {
                where: {
                   id:shopId
               } 
            });

        res.status(201).send('Shop Updated successfully');
    } catch (error) {
        console.error('Error creating Shop:', error);
        res.status(500).send('Something went wrong');
    }
    },

    delete:async function (req, res) {
        let { shopId } = req.params;
         await Shops.destroy({
            where: {
                id:shopId
            }
        })

    res.status(200).send('Shop deleted successfully');
}

}


