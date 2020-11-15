import { getRandomFromRange, createQA, createGame } from '../index.js';

function isPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

function qaGenerator() {
  const number = getRandomFromRange(1, 50);
  const answer = isPrime(number) ? 'yes' : 'no';

  return createQA(number, answer);
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = createGame(description, qaGenerator);

export default startGame;
