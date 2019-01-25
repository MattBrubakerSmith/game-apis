const express = require("express");
const router = express.Router();
const diceController = require("./controller");

// GET request to roll some dice
router.get("/", diceController.roll_dice);

module.exports = router;