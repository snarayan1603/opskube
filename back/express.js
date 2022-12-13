"use strict";
const express = require("express");
const userRouter = require("./routers/userRouter.js")
const bookRouter = require("./routers/bookRouter")

const app = express();

app.use(express.json({ limit: '500mb' }));
app.use(express.urlencoded({ limit: '500mb', extended: true }));


app.use("/api/user", userRouter)
app.use("/api/book", bookRouter)


const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Listening on ${port}`);
});


