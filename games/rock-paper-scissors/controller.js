const RPS = require("./model");

/**
 * @route   POST games/rps
 * @desc    Play rock paper scissors
 * @access  Public
 */

exports.shoot = (req, res) => {
    if(!req.body.choice) {
        return res.status(400).send(new console.error("You must make a choice! Rock (R), paper (P), or scissors (S)!"))
    }

    RPS.shoot(req.body.choice, (rpsResults, err) => {
        if(err) {
            return res.status(500).send(err);
        }

        res.status(200).send(rpsResults);
    }) 
}