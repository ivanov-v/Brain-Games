import { cons, car, cdr } from '@hexlet/pairs';

import {
  createGame, createQuestionAnswer,
} from '../index.js';
import getRandomFromRange from '../helpers.js';

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

  return operators[getRandomFromRange(0, operators.length - 1)];
}

function questionAnswerGenerator() {
  const operand1 = getRandomFromRange(0, 10);
  const operand2 = getRandomFromRange(0, 10);
  const operator = getRandomOperator();
  const operatorFunc = getOperatorFunc(operator);
  const operatorString = getOperatorString(operator);

  const question = `${operand1} ${operatorString} ${operand2}`;
  const answer = String(operatorFunc(operand1, operand2));

  return createQuestionAnswer(question, answer);
}

const description = 'What is the result of the expression?';

const startGame = createGame(description, questionAnswerGenerator);

export default startGame;
