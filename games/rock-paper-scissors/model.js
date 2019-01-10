module.exports.shoot = (choice, callback) => {
    let rpsOptions = ["R", "P", "S"];
    let compChoice = rpsOptions[Math.floor(Math.random() * 3)];

    let winner;

    switch(choice) {
        case "R": {
            winner = compChoice === "S" ? "Player" : compChoice === "P" ? "Computer" : "Draw";
            break;
        }
        case "P": {
            winner = compChoice === "R" ? "Player" : compChoice === "S" ? "Computer" : "Draw";
            break;
        }
        case "S": {
            winner = compChoice === "P" ? "Player" : compChoice === "R" ? "Computer" : "Draw";
            break;
        }
        default: {
            callback(new console.error(`"${choice}" is an invalid option! It must be either "R", "P", or "S".`));
            return;
        }
    }

    callback({
        playerChoice: choice,
        compChoice: compChoice,
        winner: winner
    });
}