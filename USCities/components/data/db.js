const mongoose = require("mongoose");
require("../cities/cities.model")

mongoose.connect("mongodb://127.0.0.1:27017/cities")

mongoose.connection.on("connected", function () {
    console.log("Mongoose is connected")
})