const mongoose = require("mongoose");


const Zip = mongoose.model("zip");


const getAll = function (request, response) {
    console.log('getAll cities controller');
    let offset = 0;
    let limit = 10;
    let responseData = {
        totalCount: "",
        cities: "",
    }
    if (request.query && request.query.offset) {
        offset = request.query.offset;
    }
    if (request.query && request.query.limit) {
        limit = request.query.limit;
    }

    Zip.find().skip(offset).limit(limit).exec()
        .then(cities => {
            responseData.cities = cities;
            return Zip.countDocuments();
        })
        .then(count => {

            responseData.totalCount = count;
            console.log(responseData)
            response.status(200).json(responseData)
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