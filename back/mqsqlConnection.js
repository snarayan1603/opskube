const mysql = require("mysql");

const mysqlConnection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "123",
    database: "BookStore"
})

mysqlConnection.connect((err) => {
    if (err) throw err;

    console.log("Connected successfully...")
});

module.exports.mysqlConnection = mysqlConnection;