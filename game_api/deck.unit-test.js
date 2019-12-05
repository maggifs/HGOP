const deckConstructor = require('./deck.js');

describe('Deck', () => {
  test('A new instance of a deck should have 52 cards', () => {
    const deck = deckConstructor();

    expect(deck.length).toEqual(52);
  });
});
