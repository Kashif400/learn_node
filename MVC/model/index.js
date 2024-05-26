// const products = [];
// module.exports = products;

// const mysql = require('mysql2');
// function connection() {
//     const connection = mysql.createConnection({
//         host: '127.0.0.1',
//         port: 3306,
//         user: 'root',
//         password: 'Kashif121445',
//         database:'shop'
        
//     });

//     return connection.promise();

// }

// module.exports = connection;


const {Sequelize} = require('sequelize')

const sequelize = new Sequelize({
    dialect: 'mysql',
    host: '127.0.0.1',
    username: 'root',
    password: 'Kashif121445',
    database: 'shop'

});
sequelize.authenticate().then(() => {
    console.log('Database connected successfuly');
}).catch((error) => {
    console.log(error)
});
module.exports = sequelize