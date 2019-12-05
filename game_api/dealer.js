module.exports = (context) => {
  let random = context('random')(context);
  return {
    shuffle: (deck) => {
      for (let i = 0; i < deck.length - 1; i++) {
        const j = Math.floor(random() * (deck.length - i)) + i;
        const card = deck[j];
        const old = deck[i];
        deck[i] = card;
        deck[j] = old;
      }
    },
    draw: (deck) => {
        const card = deck.pop();
        return card;
      },
    };
};
