const mysql = require('mysql') 

const dbConexion = {
    host: 'localhost',  
    user: 'root',
    password: '',
    database: 'prueba',
};

const conexiondata = mysql.createConnection(dbConexion);
module.exports = conexiondata;
