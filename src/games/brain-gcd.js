import { createQuestionAnswer, createGame } from '../index.js';
import { getRandomFromRange } from '../helpers';

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

function questionAnswerGenerator() {
  const num1 = getRandomFromRange(1, 50);
  const num2 = getRandomFromRange(1, 50);
  const gcd = getGcd(num1, num2);

  const question = `${num1} ${num2}`;
  const answer = String(gcd);

  return createQuestionAnswer(question, answer);
}

const description = 'Find the greatest common divisor of given numbers.';

const startGame = createGame(description, questionAnswerGenerator);

export default startGame;
