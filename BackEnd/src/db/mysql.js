const mysql2 = require('mysql2')
const config = require('../config/config.js')

const dbConfig = {
    host: config.mysql2.host,
    database: config.mysql2.database,
    user: config.mysql2.user,
    password: config.mysql2.password,
}

function conMysql(){
    conexion = mysql2.createConnection(dbConfig)

    conexion.connect((err)=> {
        if(err){
            console.log('[error en conexion de base de datos]', err)
            setTimeout(conMysql, 200)
        }else{
            console.log('[Base de datos conectada en la nube `mysql`]')
        }
    });
}

conMysql()

function list() {
    return new Promise((req, res) => {
        conexion.query(`SELECT * FROM ingresos`, (err, result) => {
            if(err) return res(err)
            req(result);
        })
    })
}


module.exports = {
    list,
}