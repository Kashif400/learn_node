const sequelize = require('./index.js'); // Correctly importing the sequelize instance
const { DataTypes } = require('sequelize');

const Shop = sequelize.define("shops", {
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
    stock: {
        type: DataTypes.INTEGER,
        allowNull: false,
        defaultValue:0
    },
    address: {
        type: DataTypes.STRING,
        allowNull: false,
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
    }
});

//{force :true}
//to add new column but a complete table delete they again create new table 
// this statement  all data to clear data in table los data
sequelize.sync({alter:true}).then(() => {
    console.log('syncing  is completed successfully')
}).catch((error) => {
    console.log(error)
})
module.exports = Shop