const mongoose= require("mongoose");

const shipSchema= mongoose.Schema({
    vesslterms: String,
    feature_type: String,
    chart: String,
    latdec: Number,
    londec: Number,
    depth: {
        type: Number,
        required: true
    },
    sounding_type: String,
    history: String,
    quasou: String,
    watlev: String,
    coordinates: {
        type: [Number],
        index: "2dsphere"
    }
    
    // geo: {
    //     type: {
    //         type: String,
    //         required: true
    //     },
    //     coordinates: {
    //         type: [Number],
    //         index: "2dsphere"
    //     }
    // }
});

mongoose.model(process.env.SHIP_MODEL, shipSchema, process.env.DB_SHIPS_COLLECTION)