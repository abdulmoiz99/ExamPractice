const mongoose = require("mongoose");

const zipsSchema = mongoose.Schema({
    city: String,
    zip: String,
    pop: Number,
    state: String,
    loc: [Number]
})

mongoose.model("zip", zipsSchema, "zips");