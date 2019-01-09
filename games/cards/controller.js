const deckModel = require("./model");

/**
 * @route   GET games/cards
 * @desc    Get a deck of cards
 * @access  Public
 */
exports.get_deck = function(req, res) {
    res.status(200).send(deckModel.getDeck());
}
