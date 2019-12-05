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
    test('dealer should shuffle cards', () => {
      // Arrange
      let dependencies = {
        'random': () => newRandom([2, 1]),
      };
      let newDealer = require('./dealer.js');
      let dealer = newDealer((name) => {
        return dependencies[name];
      });
      let deck = ['a', 'b', 'c'];
  
      // Act
      dealer.shuffle(deck);
  
      // Assert
      expect(deck).toEqual(['c', 'b', 'a']);
    });
    test('', () => {
      // TODO
    });
    test('', () => {
      // TODO
    });
  });
  describe('Draw', () => {
    test('Draw card should return card', () => {
      let newDealer = require('./dealer.js');
      let dealer = newDealer((name) => {
        return dependencies[name];
      });
      let deck = ['05H', '07H', '09H'];

      const card = dealer.draw(deck);

      expect(card).toEqual('09H');
    });
    test('Draw should check if deck is without the card', () => {
      let newDealer = require('./dealer.js');
      let dealer = newDealer((name) => {
        return dependencies[name];
      });
      let deck = ['05H', '07H', '09H'];

      dealer.draw(deck);

      expect(deck).toEqual(['05H', '07H']);
    });
  });
})