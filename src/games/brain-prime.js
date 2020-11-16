import { createQuestionAnswer, createGame } from '../index.js';
import getRandomFromRange from '../helpers.js';

function isPrime(number) {
  for (let i = 2; i < number; i += 1) {
    if (number % i === 0) return false;
  }
  return number > 1;
}

function questionAnswerGenerator() {
  const number = getRandomFromRange(1, 50);

  const question = String(number);
  const answer = isPrime(number) ? 'yes' : 'no';

  return createQuestionAnswer(question, answer);
}

const description = 'Answer "yes" if given number is prime. Otherwise answer "no".';

const startGame = createGame(description, questionAnswerGenerator);

export default startGame;
