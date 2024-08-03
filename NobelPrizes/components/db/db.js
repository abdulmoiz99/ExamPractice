const mongoose = require("mongoose");
require("../laureates/laureates.model")
const _env = process.env;

mongoose.connect(_env.DB_URL);

mongoose.connection.on("connected", function () {
    console.log("mongoose connected");
})