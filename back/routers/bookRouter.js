var express = require('express');
const { mysqlConnection } = require("../mqsqlConnection")
var router = express.Router();


router.get("/all", async function (req, res) {

    var sql = `SELECT * from books`;
    mysqlConnection.query(sql, function (err, result) {
        if (err) throw err;
        console.log(result);
        res.send({ message: "ok", data: result })
    });

})

router.post("/history", async function (req, res) {

    let info = req.body

    var sql = `SELECT * from books where sellerId = ${info.personId}`;
    mysqlConnection.query(sql, function (err, result) {
        if (err) throw err;
        res.send({ message: "ok", data: result })
    });

})


router.post("/create-order", async function (req, res) {    

    let info = req.body

    var sql = `Insert into orders (shippingAddress, cartItems, cartTotal, personId) Values ('${info.shippingAddress}', '${info.cartItems}', '${info.cartTotal}','${info.personId}')`;
    mysqlConnection.query(sql, function (err, result) {
        if (err) throw err;
        res.send({ message: "ok" })
    });

})

router.post("/purchase", async function (req, res) {

    let info = req.body

    var sql = `SELECT * from orders where personId = ${info.personId}`;
    mysqlConnection.query(sql, function (err, result) {
        if (err) throw err;
        res.send({ message: "ok", data: result })
    });

})

router.post("/sold", async function (req, res) {

    let info = req.body

    var sql = `SELECT * from orders`;
    mysqlConnection.query(sql, function (err, result) {
        if (err) throw err;

        let data = []
        result.forEach(x => {
            let temp = JSON.parse(x.cartItems)
            temp.forEach(y => {
                if (y.sellerId === info.personId)
                    data.push(y)
            })
        })

        res.send({ message: "ok", data })
    });

})


router.post('/insert', async function (req, res) {

    let info = req.body.data,
        userInfo = req.body.userInfo    

    var sql = `INSERT INTO books (name, price, bookDesc, bookLink, sellerId) VALUES ('${info.name}', '${info.price}', '${info.desc}', '${info.img}', '${userInfo.personId}')`;
    mysqlConnection.query(sql, function (err, result) {
        if (err) throw err;
        res.send({ message: "ok" })
    });
})


router.post('/delete', async function (req, res) {
    let bookId = req.body.bookId

    var sql = `delete from books where bookId = ${bookId}`;
    mysqlConnection.query(sql, function (err, result) {
        if (err) throw err;
        res.send({ message: "ok" })
    });
})



router.post('/update', async function (req, res) {

    let info = req.body.data;    

    var sql = `update books set name = '${info.name}', price = '${info.price}', bookDesc = '${info.desc}', bookLink = '${info.img}' where bookId = ${info.bookId}`;
    mysqlConnection.query(sql, function (err, result) {
        if (err) throw err;
        res.send({ message: "ok" })
    });
})


module.exports = router




//create table books (bookId int NOT NULL AUTO_INCREMENT PRIMARY KEY, name varchar(255), price varchar(255), bookDesc TEXT, bookLink LONGTEXT, sellerId Int);

//create table orders (orderId int NOT NULL AUTO_INCREMENT PRIMARY KEY, shippingAddress text, cartItems text, cartTotal int, personId Int);