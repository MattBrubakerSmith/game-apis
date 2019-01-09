const { TicTacToe } = require("./model");

/**
 * @route   GET games/tic-tac-toe/new
 * @desc    Start a new tic tac toe game
 * @access  Public
 */
exports.create_new_game = function(req, res) {
    let newGame = new TicTacToe({
        currentPlayer: "X",
        xTiles: [],
        oTiles: []
    });
    //FIX IT
    TicTacToe.createNewGame(newGame, (game, err) => {
        if(err) {
            return res.status(500).send(err);
        }

        res.status(200).send(game);
    });
}