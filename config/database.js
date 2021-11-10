const mysql2 = require('mysql2')

const databaseConnection = mysql2.createConnection({
    host: 'localhost',
    user: 'root',
    database: 'tienda_ropa',
    port: 3307
})

databaseConnection.connect((error)=>{
    if(error) {
        console.log(error)
    } else {
        console.log('Servidor esta conectado a MySQL')
    }
})

module.exports = databaseConnection