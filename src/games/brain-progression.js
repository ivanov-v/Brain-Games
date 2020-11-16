import { getRandomFromRange, createQA, createGame } from '../index.js';

function createProgression(start, step, length) {
  const result = [start];
  let acc = start;

  for (let i = 1; i < length; i += 1) {
    acc += step;
    result.push(acc);
  }

  return result;
}

function qaGenerator() {
  const start = getRandomFromRange(1, 10);
  const step = getRandomFromRange(1, 5);
  const length = getRandomFromRange(5, 10);
  const progression = createProgression(start, step, length);
  const hiddenElem = progression[getRandomFromRange(0, progression.length - 1)];
  const question = progression.map((elem) => (elem === hiddenElem ? '..' : elem)).join(' ');

  return createQA(question, String(hiddenElem));
}

const description = 'What number is missing in the progression?';

const startGame = createGame(description, qaGenerator);

export default startGame;
