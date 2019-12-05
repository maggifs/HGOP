function newRandom(randomReturnValues) {
  let i = 0;
  return {
    randomInt: (min, max) => {
      return randomReturnValues[i++];
    }
  };
}
describe('Dealer', () => {
  describe('Shuffle', () => {
    test('Dealer should shuffle cards', () => {
      // Arrange
      const dependencies = {
        random: () => newRandom([2, 1])
      };
      const newDealer = require('./dealer.js');
      const dealer = newDealer(name => {
        return dependencies[name];
      });
      const deck = ['a', 'b', 'c'];

      // Act
      dealer.shuffle(deck);

      // Assert
      expect(deck).toEqual(['c', 'b', 'a']);
    });
    test('Dealer should return not shuffled deck', () => {
      // TODO
      const dependencies = {
        random: () => newRandom([2, 1])
      };
      const newDealer = require('./dealer.js');
      const dealer = newDealer(name => {
        return dependencies[name];
      });
      const deck = ['a', 'b', 'c'];

      dealer.shuffle = deck => {};

      dealer.shuffle(deck);

      expect(deck).toEqual(['a', 'b', 'c']);
    });
  });
  describe('Draw', () => {
    test('Draw card should return card', () => {
      const newDealer = require('./dealer.js');
      const dependencies = {
        random: () => newRandom([2, 1])
      };
      const dealer = newDealer(name => {
        return dependencies[name];
      });
      const deck = ['05H', '07H', '09H'];

      const card = dealer.draw(deck);

      expect(card).toEqual('09H');
    });
    test('Draw should check if deck is without the card', () => {
      const newDealer = require('./dealer.js');
      const dependencies = {
        random: () => newRandom([2, 1])
      };
      const dealer = newDealer(name => {
        return dependencies[name];
      });
      const deck = ['05H', '07H', '09H'];

      dealer.draw(deck);

      expect(deck).toEqual(['05H', '07H']);
    });
  });
});
