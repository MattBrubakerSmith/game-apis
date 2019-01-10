const deckGenerator = (deckCount, withJokers) => {
    deckCount = deckCount || 1;
    let deck = [];

    if(withJokers === true) {
        for(let i = 0; i < deckCount * 2; i++) {
            deck.push({
                rank: "joker",
                suit: "joker",
                id: `J${i}`
            });
        }
    }

    for(let deckIndex = 0; deckIndex < deckCount; deckIndex++) {
        for(let suitIndex = 0; suitIndex < 4; suitIndex++) {
            let suit;
            switch(suitIndex) {
                case 0: {
                    suit = "clubs";
                    break;
                }
                case 1: {
                    suit = "diamonds";
                    break;
                }
                case 2: {
                    suit = "hearts";
                    break;
                }
                case 3: {
                    suit = "spades";
                    break;
                }
                default: {
                    break;
                }
            }
            for(let rankIndex = 0; rankIndex < 13; rankIndex++) {
                let card = {
                    suit: suit
                }
                switch(rankIndex) {
                    case 0: {
                        card.rank = "2";
                        card.id = `2${suit.charAt(0).toUpperCase()}${deckCount > 1 ? "_" + deckIndex : ""}`;
                        break;
                    }
                    case 1: {
                        card.rank = "3";
                        card.id = `3${suit.charAt(0).toUpperCase()}${deckCount > 1 ? "_" + deckIndex : ""}`;
                        break;
                    }
                    case 2: {
                        card.rank = "4";
                        card.id = `4${suit.charAt(0).toUpperCase()}${deckCount > 1 ? "_" + deckIndex : ""}`;
                        break;
                    }
                    case 3: {
                        card.rank = "5";
                        card.id = `5${suit.charAt(0).toUpperCase()}${deckCount > 1 ? "_" + deckIndex : ""}`;
                        break;
                    }
                    case 4: {
                        card.rank = "6";
                        card.id = `6${suit.charAt(0).toUpperCase()}${deckCount > 1 ? "_" + deckIndex : ""}`;
                        break;
                    }
                    case 5: {
                        card.rank = "7";
                        card.id = `7${suit.charAt(0).toUpperCase()}${deckCount > 1 ? "_" + deckIndex : ""}`;
                        break;
                    }
                    case 6: {
                        card.rank = "8";
                        card.id = `8${suit.charAt(0).toUpperCase()}${deckCount > 1 ? "_" + deckIndex : ""}`;
                        break;
                    }
                    case 7: {
                        card.rank = "9";
                        card.id = `9${suit.charAt(0).toUpperCase()}${deckCount > 1 ? "_" + deckIndex : ""}`;
                        break;
                    }
                    case 8: {
                        card.rank = "10";
                        card.id = `10${suit.charAt(0).toUpperCase()}${deckCount > 1 ? "_" + deckIndex : ""}`;
                        break;
                    }
                    case 9: {
                        card.rank = "jack";
                        card.id = `J${suit.charAt(0).toUpperCase()}${deckCount > 1 ? "_" + deckIndex : ""}`;
                        break;
                    }
                    case 10: {
                        card.rank = "queen";
                        card.id = `Q${suit.charAt(0).toUpperCase()}${deckCount > 1 ? "_" + deckIndex : ""}`;
                        break;
                    }
                    case 11: {
                        card.rank = "king";
                        card.id = `K${suit.charAt(0).toUpperCase()}${deckCount > 1 ? "_" + deckIndex : ""}`;
                        break;
                    }
                    case 12: {
                        card.rank = "ace";
                        card.id = `A${suit.charAt(0).toUpperCase()}${deckCount > 1 ? "_" + deckIndex : ""}`;
                        break;
                    }
                    default: {
                        break;
                    }
                }
                deck.push(card);
            }
        }
    }
    return deck;
}

// Add Shuffle to Array prototype
Array.prototype.shuffle = function() {
    var input = this;
     
    for (var i = input.length-1; i >=0; i--) {
     
        var randomIndex = Math.floor(Math.random()*(i+1)); 
        var itemAtIndex = input[randomIndex]; 
         
        input[randomIndex] = input[i]; 
        input[i] = itemAtIndex;
    }
    return input;
}

module.exports.getDeck = (deckCount, withJokers, callback) => {
    if(typeof(deckCount) !== "number") {
        callback(new console.error("The deckCount must be a number!"));
    }

    let deck = deckGenerator(deckCount, withJokers);
    callback(deck);
}