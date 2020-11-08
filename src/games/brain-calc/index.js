import { cons, car, cdr } from '@hexlet/pairs';

import promptly from 'promptly';
import {
  congratulations, getRandomNumber, greet, ROUNDS_COUNT,
} from '../../index.js';

function createOperator(operatorString, operatorFunc) {
  return cons(operatorString, operatorFunc);
}

function getOperatorString(operator) {
  return car(operator);
}

function getOperatorFunc(operator) {
  return cdr(operator);
}

const sumOperator = createOperator('+', (number1, number2) => number1 + number2);
const subOperator = createOperator('-', (number1, number2) => number1 - number2);
const multiOperator = createOperator('*', (number1, number2) => number1 * number2);

function getRandomOperator() {
  const operators = [sumOperator, subOperator, multiOperator];

  return operators[getRandomNumber(0, operators.length - 1)];
}

function createExp(expString, expResult) {
  return cons(expString, expResult);
}

function getExpString(exp) {
  return car(exp);
}

function getExpResult(exp) {
  return cdr(exp);
}

function getRandomExp() {
  const operand1 = getRandomNumber(0, 10);
  const operand2 = getRandomNumber(0, 100);
  const operator = getRandomOperator();
  const operatorFunc = getOperatorFunc(operator);
  const operatorString = getOperatorString(operator);
  const expResultString = `${operand1} ${operatorString} ${operand2}`;
  const expResult = operatorFunc(operand1, operand2);

  return createExp(expResultString, expResult);
}

async function startGame() {
  const userName = await greet();

  console.log('What is the result of the expression?');

  const exps = [...Array(ROUNDS_COUNT)].map(() => getRandomExp());

  // eslint-disable-next-line no-restricted-syntax
  for (const exp of exps) {
    console.log(`Question: ${getExpString(exp)}`);

    const correctAnswer = getExpResult(exp);
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
