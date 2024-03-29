const helper = require('./server.lib-test.js');

const timeout = 5000;
const gameCount = 100;

const playGames = (url, count, done) => {
  if (count === 0) {
    done();
    return;
  }

  // Creating a callback that works the same way as done in Jest.
  const playGameCallback = () => {
    playGames(url, count - 1, done);
  };
  playGameCallback.fail = done.fail;

  helper.playGame(url, playGameCallback);
};

test('play ' + gameCount + ' games within ' + (timeout / 1000) + ' seconds', function(done) {
  playGames(process.env.API_URL, gameCount, done);
}, timeout);
