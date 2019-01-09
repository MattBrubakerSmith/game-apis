const express = require("express");
const router = express.Router();
const cardsController = require("./controller");

// GET request to recieve a deck of cards
router.get("/", cardsController.get_deck, function(res, err) {
    console.log(res);
});

module.exports = router;