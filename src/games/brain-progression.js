import { createQuestionAnswer, createGame } from '../index.js';
import { getRandomFromRange } from '../helpers.js';

function createProgression(first, step, length) {
  const result = [];

  for (let i = first; result.length < length; i += step) {
    result.push(i);
  }

  return result;
}

function questionAnswerGenerator() {
  const first = getRandomFromRange(1, 10);
  const step = getRandomFromRange(1, 5);
  const length = getRandomFromRange(5, 10);
  const progression = createProgression(first, step, length);
  const hiddenElem = progression[getRandomFromRange(0, progression.length - 1)];

  const question = progression.map((elem) => (elem === hiddenElem ? '..' : elem)).join(' ');
  const answer = String(hiddenElem);

  return createQuestionAnswer(question, answer);
}

const description = 'What number is missing in the progression?';

export default () => {
  createGame(description, questionAnswerGenerator);
};
