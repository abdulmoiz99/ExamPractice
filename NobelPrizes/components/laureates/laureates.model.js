const mongoose = require("mongoose");

const laureatesSchema = mongoose.Schema({
    id: String,
    firstname: String,
    surname: String,
    born: String,
    died: String,
    bornountry: String,
    bornountryCode: String,
    bornity: String,
    diedountry: String,
    diedountryCode: String,
    diedity: String,
    gender: String,
    year: String,
    category: String,
});

mongoose.model(process.env.LAUREATE_MODEL, laureatesSchema, "laureates");