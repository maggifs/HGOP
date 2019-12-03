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

  describe("isGameOver", () => {
    test("game is over because card is not undefined", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.card = "02H";
      expect(game.isGameOver(game)).toBe(true);
    });

    test("game is over because player has a total of 21", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["10S", "01H"];
      expect(game.isGameOver(game)).toBe(true);
    });

    test("game is over because player has a total of over 21", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);

      game.state.cards = ["10S", "10H", "10C"];

      expect(game.isGameOver(game)).toBe(true);
    });

    test("game is not over because player has a total of less than 21 and card is undefined", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["02H", "03S"];
      game.state.card = undefined;
      expect(game.isGameOver(game)).toBe(false);
    });
  });

  describe("playerWon", () => {
    test("Player has won because total is equal to 21", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["01H", "10H"];
      expect(game.playerWon(game)).toBe(true);
    });

    test("Player has won because he guesses that card puts him over 21 and it does", () => {
      let deck = deckConstructor();
      deck = ["05H"];

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

      game.state.cards = ["10H", "12H", "11H"];

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
    });
  });

  describe("getCardsValue", () => {
    // Cards without people or aces
    test("cards 05C and 02D return card value 7", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["05C", "02D"];

      expect(game.getCardsValue(game)).toEqual(7);
    });
    // Cards 2 aces
    test("cards 01H and 01C return card value 12", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["01C", "01D"];

      expect(game.getCardsValue(game)).toEqual(12);
    });
    // Cards 1 people card, 1 regular
    test("cards 12D and 04H return value 12", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["12D", "04H"];

      expect(game.getCardsValue(game)).toEqual(14);
    });
    // Cards with 1 ace, 1 regular
    test("cards 01D and 05H return value 16", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["01D", "05H"];

      expect(game.getCardsValue(game)).toEqual(16);
    });
    // Cards with 1 ace, 1 people card
    test("cards 01D and 12H return value 21", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["01D", "12H"];

      expect(game.getCardsValue(game)).toEqual(21);
    });
  });

  describe("getCardValue", () => {
    test("getCardValue returns correct value of card variable", () => {
      //TODO
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.card = "05H";

      expect(game.getCardValue(game)).toEqual(5);
    });

    test("having 03H and 06H in hand, getCardValue returns undefined", () => {
      //TODO
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["03H", "06H"];

      expect(game.getCardValue(game)).toBe(undefined);
    });
  });

  describe("getTotal", () => {
    //TODO
    test("having 03H and 06H in hand and card is 05H, getTotal returns 14", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["03H", "06H"];
      game.state.card = "05H";

      expect(game.getTotal(game)).toBe(14);
    });
    test("having 03H and 06H in hand and card is undefined, getTotal returns 9", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["03H", "06H"];
      game.state.card = undefined;

      expect(game.getTotal(game)).toBe(9);
    });
  });

  describe("getCards", () => {
    test("having 05H and 03H in hand, getCards returns ['05H', '03H']", () => {
      //TODO
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.cards = ["05H", "03H"];

      expect(game.getCards(game)).toEqual(["05H", "03H"]);
    });
  });

  describe("getCard", () => {
    test("card is 05H, getCard returns 05H", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.card = "05H";

      expect(game.getCard(game)).toBe("05H");
    });
    test("card is undefined, getCard returns undefined", () => {
      let deck = deckConstructor();
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);
      game.state.card = undefined;

      expect(game.getCards(game)).toBe(undefined);
    });
  });

  describe("guess21OrUnder", () => {
    //TODO
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
        expect(game.state.card).toEqual(undefined);
    });
    test("guess21OrUnder should give cards on hand value of 21", () => {
        // Arrange
        let deck = deckConstructor();
        deck = ["05C", "01D", "10S", "10H"];
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
        expect(game.state.card).toEqual(undefined);
        expect(game.getCardsValue(game)).toBe(21);
        expect(game.isGameOver(game)).toBe(true);
        expect(game.playerWon(game)).toBe(true);
    });
    test("guess21OrUnder should give cards on hand value of 23", () => {
        // Arrange
        let deck = deckConstructor();
        deck = ["05C", "03D", "10S", "10H"];
        let dealer = dealerConstructor();
        // Override the shuffle to do nothing.
        dealer.shuffle = deck => {};
    
        // Inject our dependencies
        let game = lucky21Constructor(deck, dealer);
    
        // Act
        game.guess21OrUnder(game);
    
        // Assert
        expect(game.state.cards.length).toEqual(3);
        expect(game.state.cards[2]).toEqual("03D");
        expect(game.state.card).toEqual(undefined);
        expect(game.getCardsValue(game)).toBe(23);
        expect(game.isGameOver(game)).toBe(true);
        expect(game.playerWon(game)).toBe(false);
    });
  });

  describe("guessOver21", () => {
    test("guessOver21 ends a game", () => {
      let deck = deckConstructor();
      deck = ["03H", "04H", "03S"];
      let dealer = dealerConstructor();
      let game = lucky21Constructor(deck, dealer);

      game.guessOver21(game);

      expect(game.isGameOver(game)).toBe(true);
    });

    test("guessOver21 sets game.state.card to a card", () => {
      let deck = deckConstructor();
      deck = ["03H", "04H", "03S"];
      let dealer = dealerConstructor();
      dealer.shuffle = deck => {};

      let game = lucky21Constructor(deck, dealer);

      game.guessOver21(game);

      expect(game.state.card).toBe('03H');

    })

    test("a correct guess results in victory", () => {
      let deck = deckConstructor();
      deck = ["10H", "10H", "03S"];
      let dealer = dealerConstructor();
      dealer.shuffle = deck => {};

      let game = lucky21Constructor(deck, dealer);
      
      game.guessOver21(game);
      expect(game.playerWon(game)).toBe(true);
      expect(game.isGameOver(game)).toBe(true);
    });

    test("an incorrect guess results in a loss", () => {
      let deck = deckConstructor();
      deck = ["10H", "03H", "03S"];
      let dealer = dealerConstructor();
      dealer.shuffle = deck => {};

      let game = lucky21Constructor(deck, dealer);
      
      game.guessOver21(game);
      expect(game.playerWon(game)).toBe(false);
      expect(game.isGameOver(game)).toBe(true);

    });
  });
});
