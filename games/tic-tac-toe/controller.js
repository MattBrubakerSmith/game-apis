const TicTacToe = require("./model");

/**
 * @route   GET games/tic-tac-toe/new
 * @desc    Start a new tic tac toe game
 * @access  Public
 */
exports.create_new_game = (req, res) => {
    let newGame = new TicTacToe();

    TicTacToe.createNewGame(newGame, (game, err) => {
        if(err) {
            return res.status(500).send(err);
        }

        res.status(200).send(game);
    });
}

/**
 * @route   POST games/tic-tac-toe
 * @desc    Mark tic tac toe tile
 * @access  Public
 */
exports.mark_tile = (req, res) => {
    TicTacToe.markTile(req.headers["game-id"], req.body.tile, (game, err) => {
        if(err) {
            return res.status(500).send(err);
        }

        res.status(200).send(game);
    });
}