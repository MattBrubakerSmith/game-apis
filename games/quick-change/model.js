module.exports.getChange = (difficulty, callback) => {
    let game;
    switch(difficulty) {
        case "hard": {
            game = quickChangeGenerator(9);
            break;
        }
        case "medium": {
            game = quickChangeGenerator(6);
            break;
        }
        case "easy": {
            game = quickChangeGenerator(4);
            break;
        }
        default: {
            callback(new console.error(`"${difficulty}" is not a valid difficulty! It must be either "easy", "medium", or "hard".`))
            break;
        }
    }
    callback(game);
}

const quickChangeGenerator = (maxCoins) => {
    let countCountArray = [];
    let total = 0;

    for(let i = 0; i < 6; i++) {
        let count = Math.floor(Math.random() * maxCoins);
        countCountArray.push(count);
        switch(i) {
            case 0: {
                total += count;
                break;
            }
            case 1: {
                total += count * 5;
                break;
            }
            case 2: {
                total += count * 10;
                break;
            }
            case 3: {
                total += count * 25;
                break;
            }
            case 4: {
                total += count * 50;
                break;
            }
            case 5: {
                total += count * 100;
                break;
            }
            default: {
                break;
            }
        }
    }

    return {
        pennies: countCountArray[0],
        nickels: countCountArray[1],
        dimes: countCountArray[2],
        quarters: countCountArray[3],
        halfDollars: countCountArray[4],
        dollars: countCountArray[5],
        total: total,
        startTime: new Date()
    }
}