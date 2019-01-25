module.exports.rollDice = (sides, diceCount, callback) => {
    if(Number.isNaN(sides)) {
        throw new Error("The side-count header must be a number!");
    }

    if(Number.isNaN(diceCount)) {
        throw new Error("The dice-count header must be a number!");
    }
    
    let diceValues = [];
    let total = 0;

    for(let i = 0; i < diceCount; i++) {
        let roll = Math.floor(Math.random() * sides + 1);
        diceValues.push(roll);
        total += roll;
    }

    callback({
        diceValues: diceValues,
        total: total
    });
}