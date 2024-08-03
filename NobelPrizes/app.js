require("dotenv").config()
require("./components/db/db")
const express = require("express")
const app = express();
const router = require("./components/router")
const _env = process.env;

app.listen(_env.PORT);

app.use(express.json());
app.use(express.urlencoded({ extended: true }))

app.use("/", router)

console.log("Server listening to http://localhost:" + _env.PORT)