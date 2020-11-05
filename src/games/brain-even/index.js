import promptly from 'promptly';

import boolToYesNo from './booleanConverter.js';
import isEven from './isEven.js';
import { greet, getRandomNumber, ROUNDS_COUNT } from '../../index.js';

async function startGame() {
  const userName = await greet();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  const numbers = [...Array(ROUNDS_COUNT)].map(() => getRandomNumber(1, 20));

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
