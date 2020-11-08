import { greet, congratulations } from '../../index.js';

async function startGame() {
  const userName = await greet();

  console.log('Find the greatest common divisor of given numbers.');

  congratulations(userName);
}

export default startGame;
