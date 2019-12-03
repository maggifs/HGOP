const lucky21Constructor = require("./lucky21.js");
const deckConstructor = require("./deck.js");
const dealerConstructor = require("./dealer.js");

describe("game API", () => {
  test("a new game should have 50 cards left in the deck", () => {
    let deck = deckConstructor();
    let dealer = dealerConstructor();
    let game = lucky21Constructor(deck, dealer);
    expect(game.state.deck.length).toEqual(50);
  });

  test("a new game should have 2 drawn cards", () => {
    let deck = deckConstructor();
    let dealer = dealerConstructor();
    let game = lucky21Constructor(deck, dealer);
    expect(game.state.cards.length).toEqual(2);
  });

  test("guess21OrUnder should draw the next card", () => {
    // Arrange
    let deck = deckConstructor();
    deck = ["05C", "01D", "09S", "10H"];
    let dealer = dealerConstructor();
    // Override the shuffle to do nothing.
    dealer.shuffle = deck => {};

    // Inject our dependencies
    let game = lucky21Constructor(deck, dealer);

    // Act
    game.guess21OrUnder(game);

    // Assert
    expect(game.state.cards.length).toEqual(3);
    expect(game.state.cards[2]).toEqual("01D");
  });

  describe("isGameOver", () => {
    test("game is over", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      //Game is over if players total value is 21 or over
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["05C", "10D", "09S", "10H"];
      expect(game.isGameOver(game)).toBe(true);
    });

    test("game is not over", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["05C", "10D", "09S", "10H"];
      expect(game.isGameOver(game)).toBe(false);
    });
  });

  describe("playerWon", () => {

     /*  Player loses if:
      - Player has a total of over 21
      - Player guesses that a card puts him over 21, but it puts him at 21
      - Player guesses that a card puts him over 21, but it does not
    */
    test("Player has won because total is equal to 21", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ['01H', '10H'];
      expect(game.playerWon(game)).toBe(true);
    });

    test("Player has won because he guesses that card puts him over 21 and it does", () => {
      let deck = deckConstructor();
      deck = ['05H'];

      let dealer = dealerConstructor();
      dealer.shuffle = deck => {};

      let game = lucky21Constructor(deck, dealer);
      game.guessOver21(game);

      expect(game.playerWon(game)).toBe(true);
    });

    test("Player lost because total is over 21", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);

      game.state.cards = ['10H', '12H', '11H'];

      expect(game.playerWon(game)).toBe(false);
    });

    test("Player lost because he guesses over21 when it is not over21", () => {
      let deck = deckConstructor();
      deck = ["02H", "03C"];
      let dealer = dealerConstructor();
      dealer.shuffle = deck => {};

      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["10H", "08S"];
      
      game.guessOver21(game);

      expect(game.playerWon(game)).toBe(false);
    })
  });

  describe("getCardsValue", () => {
    test("cards 05C and 02D return card value 7", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["05C", "02D"];

      expect(game.getCardsValue(game.state.cards)).toBe(7);
    });

    test("cards 01H and 01C return card value 12", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["01C", "01D"];

      expect(game.getCardsValue(game.state.card)).toBe(12);
    });
  });

  describe("getCardValue", () => {
    test("getCardValue returns correct value of card variable", () => {
      //TODO
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.card = "05H";

      expect(game.getCardValue(game.state.card)).toBe(5);
    });

    test("having 03H and 06H in hand, getCardValue returns undefined", () => {
      //TODO
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["03H", "06H"];

      expect(game.getCardValue(game.state.card)).toBe(undefined);
    });
  });

  describe("getTotal", () => {
    //TODO
    //Arrange 
    //Act 
    //Assert
  });

  describe("getCards", () => {
    test("having 05H and 03H in hand, getCards returns ['05H', '03H']", () => {
      //TODO
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["05H", "03H"];

      expect(game.getCards(game.state.cards)).toBe(["05H", "03H"]);
    });
  });

  describe("getCard", () => {
    //TODO
    //Arrange 
    //Act 
    //Assert
  });

  describe("guess21OrUnder", () => {
    //TODO
    //Arrange 
    //Act 
    //Assert
  });

  describe("guessOver21", () => {
    //TODO
    //Arrange 
    //Act 
    //Assert
  });
});
