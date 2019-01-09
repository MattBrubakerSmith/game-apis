const express = require("express");
const router = express.Router();
const diceController = require("./controller");

// POST request to roll some dice
router.post("/roll", diceController.roll_dice);

module.exports = router;