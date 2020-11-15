import { getRandomNumber, createQA, createGame } from '../index.js';

function isEven(num) {
  return num % 2 === 0;
}

function qaGenerator() {
  const randomNumber = getRandomNumber(1, 20);
  const answer = isEven(randomNumber) ? 'yes' : 'no';

  return createQA(randomNumber, answer);
}

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = createGame(description, qaGenerator);

export default startGame;
