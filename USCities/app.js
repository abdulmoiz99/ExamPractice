require("dotenv").config()
require("./components/data/db")
const express = require("express");
const router = require("./components/router");
const app = express();


app.listen(3000);
app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/", function (req, res, next) {
    res.header('Access-Control-Allow-Origin', 'http://localhost:4200');
    next();
})
app.use("/", router)
console.log("Server is listening");
