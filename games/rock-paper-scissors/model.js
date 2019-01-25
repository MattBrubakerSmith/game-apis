module.exports.shoot = (choice, callback) => {
    if(choice !== "R" && choice !== "P" && choice !== "S") {
        throw new Error(`${choice} is an invalid option! It must be either R, P, or S.`);
    }

    let options = ["R", "P", "S"];
    let compChoice = options[Math.floor(Math.random() * 3)];

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
            break;
        }
    }

    callback({
        playerChoice: choice,
        compChoice: compChoice,
        winner: winner
    });
}