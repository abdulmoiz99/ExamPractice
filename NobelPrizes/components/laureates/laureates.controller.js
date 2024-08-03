const mongoose = require("mongoose");

const Laureate = mongoose.model(process.env.LAUREATE_MODEL);

const getAll = function (request, response) {
    console.log("getAll laureates controller");
    Laureate.find().select('firstname surname year').limit(10).exec()
        .then(laureates => {
            response.status(200).json(laureates)

        })
        .catch(error => {
            console.log(error)
            response.status(500).json("error", error)
        })
}
const getOne = function (request, response) {
    console.log("getOne laureates controller");
    Laureate.findById(request.params.Id).exec()
        .then(laureates => {
            response.status(200).json(laureates)

        })
        .catch(error => {
            response.status(500).json("error", error)
        })
}

const deleteOne = function (request, response) {
    console.log("deleteOne laureates controller");
    Laureate.deleteOne({ _id: request.params.Id }).exec()
        .then(laureates => {
            response.status(200).json(laureates)

        })
        .catch(error => {
            response.status(500).json("error", error)
        })
}

const addOne = function (request, response) {
    console.log("addOne laureates controller");
    console.log(request.body)
    const laureate = {
        firstname: "Abdul",
        surnamr: "Moiz"
    }
    Laureate.create(request.body)
        .then(laureate => console.log(laureate))
        .then(error => console.log(error))

    response.status(200).json("laureate")

}
module.exports = {
    getAll,
    getOne,
    deleteOne,
    addOne,
}