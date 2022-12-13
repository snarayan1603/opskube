var express = require('express');
const { mysqlConnection } = require("../mqsqlConnection")
var router = express.Router();


router.post("/sign-in", async function (req, res) {

    const info = req.body;
    console.log(info)

    if (info.mobile) {

        var sql = `SELECT * from users where mobile = '${info.mobile}' AND password = '${info.password}'`;
        mysqlConnection.query(sql, function (err, result) {
            if (err) throw err;
            console.log(result);
            res.send({ message: "ok", data: result[0] })
        });

    }
})

router.post('/sign-up', async function (req, res) {
    let info = req.body
    console.log(info)

    var sql = `INSERT INTO users (fname, lname, mobile, password, accountType) VALUES ('${info.fname}', '${info.lname}', '${info.mobile}', '${info.password}', '${info.accountType}')`;
    mysqlConnection.query(sql, function (err, result) {
        if (err) throw err;
        res.send({ message: "ok" })
    });
})

module.exports = router

//create table users (personId int NOT NULL AUTO_INCREMENT PRIMARY KEY, fname varchar(255), lname varchar(255), mobile varchar(255), password varchar(255), accountType varchar(255));