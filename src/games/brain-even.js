import { createQuestionAnswer, createGame } from '../index.js';
import getRandomFromRange from '../helpers.js';

function isEven(num) {
  return num % 2 === 0;
}

function questionAnswerGenerator() {
  const randomNum = getRandomFromRange(1, 20);

  const question = String(randomNum);
  const answer = isEven(randomNum) ? 'yes' : 'no';

  return createQuestionAnswer(question, answer);
}

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const startGame = createGame(description, questionAnswerGenerator);

export default startGame;
