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
    },
    winner: {
        type: String,
        default: ""
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

        let lastPlayer = game.currentPlayer;
        let tiles;

        if(game.freeTiles.indexOf(tile) > -1) {
            if(game.currentPlayer === "X") {
                game.xTiles.push(tile);
                game.currentPlayer = "O";
                tiles = game.xTiles;
            }
            else {
                game.oTiles.push(tile);
                game.currentPlayer = "X";
                tiles = game.oTiles;
            }

            game.freeTiles.splice(game.freeTiles.indexOf(tile), 1);

            if(winChecker(tiles)) {
                game.winner = lastPlayer;
            }

            if(game.freeTiles.length <= 0) {
                game.winner = "draw";
            }

            game.save(callback);
        }
        else {
            callback(new console.error("That tile is already taken!"));
        }
    })
}

const winChecker = (tiles) => {
    if(tiles.includes("A1")) {
        if((tiles.includes("A2") && tiles.includes("A3")) ||
           (tiles.includes("B2") && tiles.includes("C3")) ||
           (tiles.includes("B1") && tiles.includes("C1"))) {
               return true;
           }
    }

    if(tiles.includes("A2")) {
        if(tiles.includes("B2") && tiles.includes("C2")) {
            return true;
        }
    }

    if(tiles.includes("A3")) {
        if((tiles.includes("B3") && tiles.includes("C3")) ||
           (tiles.includes("B2") && tiles.includes("C1"))) {
            return true;
        }
    }

    if(tiles.includes("B1")) {
        if(tiles.includes("B2") && tiles.includes("B3")) {
            return true;
        }
    }

    if(tiles.includes("C1")) {
        if(tiles.includes("C2") && tiles.includes("C3")) {
            return true;
        }
    }

    return false;
}