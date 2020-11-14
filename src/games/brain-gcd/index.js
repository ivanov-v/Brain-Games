import promptly from 'promptly';
import {
  greet, congratulations, getRandomNumber, createQA, getAnswer, getQuestion, ROUNDS_COUNT,
} from '../../index.js';

function getGcd(num1, num2) {
  let a = num1;
  let b = num2;

  while (a !== b) {
    if (a > b) {
      a -= b;
    } else {
      b -= a;
    }
  }

  return a;
}

function getRandomQA() {
  const num1 = getRandomNumber(1, 50);
  const num2 = getRandomNumber(1, 50);
  const gcd = getGcd(num1, num2);

  return createQA(`${num1} ${num2}`, gcd);
}

async function startGame() {
  const userName = await greet();

  console.log('Find the greatest common divisor of given numbers.');

  const qaList = [...Array(ROUNDS_COUNT)].map(() => getRandomQA());

  // eslint-disable-next-line no-restricted-syntax
  for (const qa of qaList) {
    console.log(`Question: ${getQuestion(qa)}`);

    const correctAnswer = getAnswer(qa);
    const userAnswer = Number(await promptly.prompt('Your answer: '));

    if (correctAnswer === userAnswer) {
      console.log('Correct!');
    } else {
      console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${userName}!`);

      return;
    }
  }

  congratulations(userName);
}

export default startGame;
