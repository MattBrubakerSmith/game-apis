const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicTacToeSchema = new Schema({
    currentPlayer: {
        type: String,
        required: true
    },
    xTiles: {
        type: Array,
        required: true
    },
    oTiles: {
        type: Array,
        required: true
    }
});

module.exports = TicTacToe = mongoose.model("TicTacToe", TicTacToeSchema);

module.exports.createNewGame = (game, callback) => {
    game.save(callback);
}