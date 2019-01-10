const QCModel = require("./model");

/**
 * @route   GET games/qc
 * @desc    Start a round of Quick Change
 * @access  Public
 */

exports.get_change = (req, res) => {
    let difficulty = req.headers.difficulty || "easy";

    QCModel.getChange(difficulty, (game, err) => {
        if(err) {
            res.status(400).send(err);
        }

        res.status(200).send(game);
    });
}