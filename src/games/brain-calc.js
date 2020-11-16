import { cons, car, cdr } from '@hexlet/pairs';

import {
  createGame, createQuestionAnswer,
} from '../index.js';
import { getRandomFromRange } from '../helpers.js';

function createOperation(operator, action) {
  return cons(operator, action);
}

function getOperator(operator) {
  return car(operator);
}

function getAction(operator) {
  return cdr(operator);
}

const sumOperation = createOperation('+', (num1, num2) => num1 + num2);
const subOperation = createOperation('-', (num1, num2) => num1 - num2);
const multiOperation = createOperation('*', (num1, num2) => num1 * num2);

const operations = [sumOperation, subOperation, multiOperation];

function getRandomOperation() {
  return operations[getRandomFromRange(0, operations.length - 1)];
}

function questionAnswerGenerator() {
  const operand1 = getRandomFromRange(0, 10);
  const operand2 = getRandomFromRange(0, 10);
  const operation = getRandomOperation();
  const action = getAction(operation);
  const operator = getOperator(operation);

  const question = `${operand1} ${operator} ${operand2}`;
  const answer = String(action(operand1, operand2));

  return createQuestionAnswer(question, answer);
}

const description = 'What is the result of the expression?';

export default () => {
  createGame(description, questionAnswerGenerator);
};
