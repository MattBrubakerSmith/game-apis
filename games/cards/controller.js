const DeckModel = require("./model");

/**
 * @route   GET games/cards
 * @desc    Get a deck of cards
 * @access  Public
 */
exports.get_deck = function(req, res) {
    let deckCount = req.headers["deck-count"] ? parseInt(req.headers["deck-count"]) : 1;
    let withJokers = parseInt(req.headers["with-jokers"]) === 1 ? true : false;

    DeckModel.getDeck(deckCount, withJokers, (deck, err) => {
        if(err) {
            res.status(400).send(err);
        }

        res.status(200).send(deck);
    });
}
