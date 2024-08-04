const mongoose = require("mongoose");


const Zip = mongoose.model("zip");


const getAll = function (request, response) {
    console.log('getAll cities controller');
    Zip.find().limit(10).exec()
        .then(cities => {
            response.status(200).json(cities)
        })
        .catch(error => console.log(error))
}

const getOne = function (request, response) {
    console.log("getOne cities controller");

    Zip.findById(request.params.id)
        .then(city => response.status(200).json(city))
}

const deleteOne = function (request, response) {
    console.log("deleteOne cities controller");

    Zip.deleteOne({ _id: request.params.id })
        .then(city => response.status(200).json(city))
}
module.exports = {
    getAll,
    getOne,
    deleteOne
}