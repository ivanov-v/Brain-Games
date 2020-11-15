import { getRandomNumber, createQA, createGame } from '../index.js';

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
  const start = getRandomNumber(1, 10);
  const step = getRandomNumber(1, 5);
  const length = getRandomNumber(5, 10);
  const progression = createProgression(start, step, length);
  const hiddenElem = progression[getRandomNumber(0, progression.length - 1)];
  const question = progression.map((elem) => (elem === hiddenElem ? '..' : elem)).join(' ');

  return createQA(question, hiddenElem);
}

const description = 'What number is missing in the progression?';

const startGame = createGame(description, qaGenerator);

export default startGame;
