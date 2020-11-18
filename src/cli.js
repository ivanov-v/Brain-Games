import promptly from 'promptly';

export default async function askName() {
  const name = await promptly.prompt('May I have your name?');

  console.log(`Hello, ${name}!`);
}
