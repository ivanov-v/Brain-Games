import promptly from 'promptly';

import boolToYesNo from './booleanConverter.js';
import getRandomNumber from './random.js';
import isEvenNumber from './isEven.js';

async function greet() {
  console.log('Welcome to the Brain Games!');

  const name = await promptly.prompt('May I have your name?');

  console.log(`Hello, ${name}!`);

  return name;
}

async function askQuestion() {
  const randomNumber = getRandomNumber(1, 20);
  const isEven = isEvenNumber(randomNumber);

  console.log(`Question: ${randomNumber}`);

  const correctAnswer = boolToYesNo(isEven);
  const answer = await promptly.prompt('Your answer: ');

  if (correctAnswer === answer) {
    console.log('Correct!');
  } else {
    const errorText = `'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`;

    console.log(errorText);

    throw new Error(errorText);
  }
}

async function startGame() {
  const name = await greet();

  console.log('Answer "yes" if the number is even, otherwise answer "no".');

  // eslint-disable-next-line no-restricted-syntax,no-unused-vars
  for (const _ of Array.from(new Array(3))) {
    try {
      await askQuestion();
    } catch (e) {
      console.log(`Let's try again, ${name}!`);
      return;
    }
  }

  console.log(`Congratulations, ${name}!`);
}

export default startGame;
