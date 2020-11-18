import { generateRound, createGame } from '../index.js';
import { getRandomFromRange } from '../helpers.js';

function isPrime(number) {
  if (number < 2) {
    return false;
  }

  for (let i = 2; i <= number / 2; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

function roundGenerator() {
  const number = getRandomFromRange(1, 50);

  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';

  return generateRound(question, answer);
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

export default function startGame() {
  createGame(description, roundGenerator);
}
