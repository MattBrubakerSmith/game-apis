const diceModel = require("./model");

/**
 * @route   POST games/dice
 * @desc    Roll some dice
 * @access  Public
 */
exports.roll_dice = function(req, res) {
    console.log(req.body)

    let sides = req.body.sides || 6;
    let count = req.body.diceCount || 1;

    res.status(200).send(diceModel.rollDice(sides, count));
}
