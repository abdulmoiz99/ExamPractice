const express = require("express");
const router = express.Router();
const laureatesController = require("../laureates/laureates.controller")

router.route("/laureates")
    .get(laureatesController.getAll)
    .post(laureatesController.addOne)

router.route("/laureates/:Id")
    .get(laureatesController.getOne)
    .delete(laureatesController.deleteOne)


module.exports = router;