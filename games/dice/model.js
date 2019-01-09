module.exports.rollDice = (sides, diceCount) => {
    let diceValues = [];
    let total = 0;

    for(let i = 0; i < diceCount; i++) {
        let roll = Math.floor(Math.random() * sides + 1);
        diceValues.push(roll);
        total += roll;
    }

    return {
        diceValues: diceValues,
        total: total
    }
}