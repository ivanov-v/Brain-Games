import { getRandomFromRange, createQA, createGame } from '../index.js';

function getGcd(num1, num2) {
  let a = num1;
  let b = num2;

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
}

function qaGenerator() {
  const num1 = getRandomFromRange(1, 50);
  const num2 = getRandomFromRange(1, 50);
  const gcd = getGcd(num1, num2);

  return createQA(`${num1} ${num2}`, gcd);
}

const description = 'Find the greatest common divisor of given numbers.';

const startGame = createGame(description, qaGenerator);

export default startGame;
