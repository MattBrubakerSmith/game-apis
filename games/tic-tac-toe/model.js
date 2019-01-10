const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const TicTacToeSchema = new Schema({
    currentPlayer: {
        type: String,
        required: true,
        default: "X"
    },
    xTiles: {
        type: Array,
        required: true,
        default: []
    },
    oTiles: {
        type: Array,
        required: true,
        default: []
    },
    freeTiles: {
        type: Array,
        required: true,
        default: ["A1","A2","A3","B1","B2","B3","C1","C2","C3"]
    }
});

module.exports = TicTacToe = mongoose.model("TicTacToe", TicTacToeSchema);

module.exports.createNewGame = (game, callback) => {
    game.save(callback);
}

module.exports.markTile = (id, tile, callback) => {
    TicTacToe.findById(id, (err, game) => {
        if(err) {
            callback(err);
        }

        if(game.freeTiles.indexOf(tile) > -1) {
            if(game.currentPlayer === "X") {
                game.xTiles.push(tile);
                game.currentPlayer = "O";
            }
            else {
                game.oTiles.push(tile);
                game.currentPlayer = "X";
            }

            game.freeTiles.splice(game.freeTiles.indexOf(tile), 1);

            game.save(callback);
        }
        else {
            callback(new console.error("That tile is already taken!"));
        }
    })
}