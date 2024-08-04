const express = require("express");
const router = express.Router();
const citiesController = require("../cities/cities.controller")

router.route("/cities")
    .get(citiesController.getAll)

router.route("/cities/:id")
    .get(citiesController.getOne)
    .delete(citiesController.deleteOne)


module.exports = router;