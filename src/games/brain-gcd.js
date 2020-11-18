import { generateRound, createGame } from '../index.js';
import { getRandomFromRange } from '../helpers.js';

function findGcd(num1, num2) {
  return num2 === 0 ? num1 : findGcd(num2, num1 % num2);
}

function roundGenerator() {
  const num1 = getRandomFromRange(1, 50);
  const num2 = getRandomFromRange(1, 50);
  const gcd = findGcd(num1, num2);

  const question = `${num1} ${num2}`;
  const answer = String(gcd);

  return generateRound(question, answer);
}

const description = 'Find the greatest common divisor of given numbers.';

export default function startGame() {
  createGame(description, roundGenerator);
}
