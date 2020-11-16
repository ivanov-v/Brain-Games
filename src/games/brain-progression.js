import { generateRound, createGame } from '../index.js';
import { getRandomFromRange } from '../helpers.js';

function createProgression(first, step, length) {
  const result = [];

  for (let i = 0; i < length - 1; i += 1) {
    if (i === 0) {
      result.push(first);
    }

    const last = result[result.length - 1];

    result.push(last + step);
  }

  return result;
}

function roundGenerator() {
  const first = getRandomFromRange(1, 10);
  const step = getRandomFromRange(1, 5);
  const length = getRandomFromRange(5, 10);
  const progression = createProgression(first, step, length);
  const randomIndex = getRandomFromRange(0, progression.length - 1);
  const hiddenElem = progression[randomIndex];

  const question = progression.map((elem) => (elem === hiddenElem ? '..' : elem)).join(' ');
  const answer = String(hiddenElem);

  return generateRound(question, answer);
}

const description = 'What number is missing in the progression?';

export default () => {
  createGame(description, roundGenerator);
};
