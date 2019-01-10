const express = require("express");
const router = express.Router();
const TicTacToeController = require("./controller");

// GET request to start a new tic tac toe game
router.get("/new", TicTacToeController.create_new_game);

// POST request to mark a tic tac toe tile
router.post("/", TicTacToeController.mark_tile);

module.exports = router;