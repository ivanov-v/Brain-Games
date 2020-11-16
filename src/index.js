import promptly from 'promptly';
import { cons, car, cdr } from '@hexlet/pairs';

export const ROUNDS_COUNT = 3;

export function generateRound(question, answer) {
  return cons(question, answer);
}

export function getQuestion(round) {
  return car(round);
}

export function getAnswer(round) {
  return cdr(round);
}

export async function createGame(description, roundGenerator) {
  try {
    console.log('Welcome to the Brain Games!');

    const userName = await promptly.prompt('May I have your name?', { default: 'User' });

    console.log(`Hello, ${userName}!`);
    console.log(description);

    let roundNumber = 1;

    while (roundNumber <= ROUNDS_COUNT) {
      const round = roundGenerator();

      console.log(`Question: ${getQuestion(round)}`);

      const correctAnswer = getAnswer(round);
      const userAnswer = await promptly.prompt('Your answer: ');

      if (correctAnswer !== userAnswer) {
        console.log(`'${userAnswer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
        console.log(`Let's try again, ${userName}!`);
        return;
      }

      console.log('Correct!');
      roundNumber += 1;
    }

    console.log(`Congratulations, ${userName}!`);
  } catch (err) {
    console.log('Game canceled!');
  }
}
