import promptly from 'promptly';

import boolToYesNo from './booleanConverter.js';
import getRandomNumber from './random.js';
import isEven from './isEven.js';

const ROUNDS_COUNT = 3;
const NUMBER_MIN = 1;
const NUMBER_MAX = 20;

async function greet() {
  console.log('Welcome to the Brain Games!');

  const name = await promptly.prompt('May I have your name?');

  console.log(`Hello, ${name}!`);

  return name;
}

async function startGame() {
  const userName = await greet();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const numbers = [...Array(ROUNDS_COUNT)].map(() => getRandomNumber(NUMBER_MIN, NUMBER_MAX));

  // eslint-disable-next-line no-restricted-syntax
  for (const number of numbers) {
    console.log(`Question: ${number}`);

    const correctAnswer = boolToYesNo(isEven(number));
    const userAnswer = await promptly.prompt('Your answer: ');

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  console.log(`Congratulations, ${userName}!`);
}

export default startGame;
