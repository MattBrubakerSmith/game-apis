const express = require("express");
const router = express.Router();
const RPSController = require("./controller");

// POST request to play rock paper scissors
router.post("/", RPSController.shoot);

module.exports = router;