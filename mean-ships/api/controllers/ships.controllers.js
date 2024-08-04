const mongoose = require("mongoose");
const Ship = mongoose.model(process.env.SHIP_MODEL);

const getAll = function (req, res) {
    let offset = 0;
    let limit = 5;
    console.log("getAll controller")
    const response = {
        status: parseInt(process.env.REST_API_OK, 10),
        message: {
            totalCount: "",
            ships: ""
        }
    };
    if (req.query && req.query.offset) {
        offset = req.query.offset;
    }
    if (req.query && req.query.limit) {
        limit = req.query.limit;
    }
    Ship.find().skip(offset).limit(limit).exec()
        .then(ships => {
            response.status = parseInt(process.env.REST_API_OK, 10);
            response.message.ships = ships
            return Ship.countDocuments();
        })
        .then(count => response.message.totalCount = count)
        .finally(_ => res.status(response.status).json(response.message));


}

const getOne = function (req, res) {
    const shipId = req.params.shipId;
    Ship.findById(shipId).exec(function (err, ship) {
        const response = {
            status: parseInt(process.env.REST_API_OK, 10),
            message: ship
        };
        if (err) {
            response.status = parseInt(process.env.REST_API_SYSTEM_ERROR, 10);
            response.message = err;
        } else if (!ship) {
            response.status = parseInt(process.env.REST_API_RESOURCE_NOT_FOUND_ERROR, 10);
            response.message = {
                "message": process.env.REST_API_RESOURCE_NOT_FOUND_MESSAGE
            };
        }
        res.status(response.status).json(response.message);
    });
}

module.exports = {
    getAll: getAll,
    getOne: getOne
};