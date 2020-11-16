import { createQuestionAnswer, createGame } from '../index.js';
import { getRandomFromRange } from '../helpers.js';

function getGcd(num1, num2) {
  return num2 === 0 ? num1 : getGcd(num2, num1 % num2);
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

export default () => {
  createGame(description, questionAnswerGenerator);
};
