function newRandom(randomReturnValues) {
  let i = 0;
  return {
    randomInt: (min, max) => {
      return randomReturnValues[i++];
    }
  };
}

describe('Random', () => {
  test('', () => {});
  test('', () => {});
  test('', () => {});
});
