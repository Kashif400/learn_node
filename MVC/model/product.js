const sequelize = require('./index.js'); // Correctly importing the sequelize instance
const { DataTypes } = require('sequelize');

const Product = sequelize.define("products", {
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    price: {
        type: DataTypes.INTEGER,
        allowNull: false,
    },
    quantity: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    available: {
        type: DataTypes.BOOLEAN,
        allowNull: false,
        defaultValue:true
    },
    createdAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },
    updatedAt: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue: DataTypes.NOW
    },stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
});

//{force :true}
//to add new column but a complete table delete they again create new table 
// this statement  all data to clear data in table los data
sequelize.sync({alter:true}).then(() => {
    console.log('syncing  is completed successfully')
}).catch((error) => {
    console.log(error)
})
module.exports = Product