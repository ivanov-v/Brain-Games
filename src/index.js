import promptly from 'promptly';

export const ROUNDS_COUNT = 3;

export function getRandomNumber(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export async function greet() {
  console.log('Welcome to the Brain Games!');

  const name = await promptly.prompt('May I have your name?');

  console.log(`Hello, ${name}!`);

  return name;
}
