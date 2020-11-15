import promptly from 'promptly';
import { cons, car, cdr } from '@hexlet/pairs';

export const ROUNDS_COUNT = 3;

export function getRandomFromRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export function createQA(question, answer) {
  return cons(question, answer);
}

export function getQuestion(qa) {
  return car(qa);
}

export function getAnswer(qa) {
  return cdr(qa);
}

export function createGame(description, qaGenerator) {
  return async () => {
    console.log('Welcome to the Brain Games!');

    const userName = await promptly.prompt('May I have your name?');

    console.log(`Hello, ${userName}!`);
    console.log(description);

    const qaList = [...Array(ROUNDS_COUNT)].map(() => qaGenerator());

    // eslint-disable-next-line no-restricted-syntax
    for (const qa of qaList) {
      console.log(`Question: ${getQuestion(qa)}`);

      const correctAnswer = String(getAnswer(qa));
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
  };
}
