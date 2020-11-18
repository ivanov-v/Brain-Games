import { cons, car, cdr } from '@hexlet/pairs';

import {
  createGame, generateRound,
} from '../index.js';
import { getRandomFromRange } from '../helpers.js';

function createOperation(operator, action) {
  return cons(operator, action);
}

function getOperator(operation) {
  return car(operation);
}

function getAction(operation) {
  return cdr(operation);
}

const sumOperation = createOperation('+', (num1, num2) => num1 + num2);
const subOperation = createOperation('-', (num1, num2) => num1 - num2);
const multiOperation = createOperation('*', (num1, num2) => num1 * num2);

const operations = [sumOperation, subOperation, multiOperation];

function getRandomOperation() {
  return operations[getRandomFromRange(0, operations.length - 1)];
}

function roundGenerator() {
  const operand1 = getRandomFromRange(0, 10);
  const operand2 = getRandomFromRange(0, 10);
  const operation = getRandomOperation();
  const action = getAction(operation);
  const operator = getOperator(operation);

  const question = `${operand1} ${operator} ${operand2}`;
  const answer = String(action(operand1, operand2));

  return generateRound(question, answer);
}

const description = 'What is the result of the expression?';

export default function startGame() {
  createGame(description, roundGenerator);
}
