// app.js
const mysql = require('mysql');

const connection = mysql.createConnection({
    host: '', // O host do banco. Ex: localhost
    user: '', // Um usuário do banco. Ex: user 
    password: '', // A senha do usuário. Ex: user123
    database: '' // A base de dados a qual a aplicação irá se conectar, deve ser a mesma onde foi executado o Código 1. Ex: node_mysql
});

connection.connect((err) => {
    if (err) {
        console.log('Erro connecting to database...', err)
        return
    }
    console.log('Connection established!')
})

connection.end((err) => {
    if(err) {
        console.log('Erro to finish connection...', err)
        return 
    }
    console.log('The connection was finish...')
})