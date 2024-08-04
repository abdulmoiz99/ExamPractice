const mongoose= require("mongoose");
require("./ships-model");

mongoose.connect(process.env.DB_URL);

mongoose.connection.on("connected", function() {
    console.log("Mongoose connected to", process.env.DB_NAME);
});

mongoose.connection.on("disconnected", function() {
    console.log("Mongoose disconnected");
});

mongoose.connection.on("error", function(err) {
    console.log("Mongoose connection error", err);
});

process.on("message", function(message) {
    console.log("message ", message);
});

process.on("SIGINT", function() {
    mongoose.connection.close(function() {
        console.log(process.env.SIGINT_MESSAGE);
        process.exit(0);
    });    
});

process.on("SIGTERM", function() {
    mongoose.connection.close(function() {
        console.log(process.env.SIGTERM_MESSAGE);
        process.exit(0);
    });    
});