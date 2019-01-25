const diceModel = require("./model");

/**
 * @route   GET games/dice
 * @desc    Roll some dice
 * @access  Public
 */
exports.roll_dice = function(req, res) {
    let sides = req.headers["side-count"] ? parseInt(req.headers["side-count"]) : 6;
    let count = req.headers["dice-count"] ? parseInt(req.headers["dice-count"]) : 1;

    diceModel.rollDice(sides, count, (results, err) => {
        if(err) {
            res.status(400).send(err);
        }

        res.status(200).send(results);
    });
}
