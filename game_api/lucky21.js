module.exports = (deck, dealer) => {
  dealer.shuffle(deck);
  const card0 = dealer.draw(deck);
  const card1 = dealer.draw(deck);
  const state = {
    deck: deck,
    dealer: dealer,
    cards: [card0, card1],
    // The card that the player thinks will exceed 21.
    card: undefined,
  };
  return {
    state: state,
    // Is the game over (true or false).
    // Is the game finished.
    isGameOver: (game) => {
      if (game.playerWon(game) || game.getTotal(game) >= 21 || game.state.card) {
        return true;
      }
      return false;
    },
    // Has the player won (true or false).
    playerWon: (game) => {
      if (game.getTotal(game) > 21 && game.state.card) return true;
      if (game.getTotal(game) == 21 && game.state.card == undefined) {
        return true;
      }
      return false;
    },
    // The highest score the cards can yield without going over 21 (integer).
    getCardsValue: (game) => {
      let counter = 0;
      let total = 0;
      const cards = game.state.cards;
      for (i = 0; i < cards.length; i++) {
        let card = parseInt(cards[i].substr(0, 2));
        if (card > 10) {
          card = 10;
          total += card;
        } else if (card == 1) {
          counter++;
        } else {
          total += card;
        }
      }
      for (i = 0; i < counter; i++) {
        if (total + 11 > 21) {
          total += 1;
        } else {
          total += 11;
        }
      }
      return total;
    },
    // The value of the card that should exceed 21 if it exists (integer or undefined).
    getCardValue: (game) => {
      const card = game.state.card;
      if (card) {
        cardVal = parseInt(card.substr(0, 2));
        if (cardVal > 10) {
          cardVal = 10;
        }
        return cardVal;
      }
      return card;
    },
    // The cards value + the card value if it exits (integer).
    getTotal: (game) => {
      const cardsValue = game.getCardsValue(game);
      const cardValue = game.getCardValue(game);

      if (cardValue) {
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
      game.state.cards.push(deck.pop());
    },
    // Player action (void).
    guessOver21: (game) => {
      const card = game.state.deck.pop();
      game.state.card = card;
    },
  };
};
