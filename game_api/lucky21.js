module.exports = (deck, dealer) => {
    dealer.shuffle(deck);
    let card0 = dealer.draw(deck);
    let card1 = dealer.draw(deck);
    let state = {
        deck: deck,
        dealer: dealer,
        cards: [
            card0,
            card1,
        ],
        // The card that the player thinks will exceed 21.
        card: undefined,
    };
    return {
        state: state,
        // Is the game over (true or false).
        // Is the game finished.
        isGameOver: (game) => {
            //TESTED
            if(game.playerWon(game) || game.getTotal(game) >= 21 || game.state.card ) return true;
            return false;
        },
        // Has the player won (true or false).
        playerWon: (game) => {
            if(game.getTotal(game) > 21 && game.state.card) return true;
            if(game.getTotal(game) == 21 && game.state.card == undefined) return true;
            return false;
        },
        // The highest score the cards can yield without going over 21 (integer).
        getCardsValue: (game) => {
            //TESTED
            let counter = 0;
            let total = 0;
            let cards = game.state.cards;
            for(i = 0; i < cards.length; i++) {
                let card = parseInt(cards[i].substr(0,2));
                if(card > 10){
                    card = 10;
                    total += card;
                }
                else if(card == 1){
                    counter ++;
                }
                else {
                    total += card;
                }
            };
            for(i = 0; i < counter; i++) {
                if(total + 11 > 21) {
                    total += 1;
                }
                else {
                    total += 11;
                }
            }
            return total;
        },
        // The value of the card that should exceed 21 if it exists (integer or undefined).
        getCardValue: (game) => {
            let card = game.state.card;
            if(card){
                cardVal = parseInt(card.substr(0,2));
                if (cardVal > 10) {
                    cardVal = 10;
                }
                return cardVal;
            }
            return card;
        },
        // The cards value + the card value if it exits (integer).
        getTotal: (game) => {
            let cardsValue = game.getCardsValue(game);
            let cardValue = game.getCardValue(game);

            if(cardValue){
                return cardsValue + cardValue;
            } 
            return cardsValue;
        },
        // The player's cards (array of strings).
        getCards: (game) => {
            return game.state.cards;
        },
        // The player's card (string or undefined).
        getCard: (game) => {
            return game.state.card;
        },
        // Player action (void).
        guess21OrUnder: (game) => {
            // TODO
            game.state.cards.push(deck.pop());
        },
        // Player action (void).
        guessOver21: (game) => {
            let card = game.state.deck.pop();
            game.state.card = card;

        },
    };
};