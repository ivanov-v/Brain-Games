import { generateRound, createGame } from '../index.js';
import { getRandomFromRange } from '../helpers.js';

function isEven(num) {
  return num % 2 === 0;
}

function roundGenerator() {
  const randomNum = getRandomFromRange(1, 20);

  const question = String(randomNum);
  const answer = isEven(randomNum) ? 'yes' : 'no';

  return generateRound(question, answer);
}

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

export default function startGame() {
  createGame(description, roundGenerator);
}
