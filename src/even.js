import readlineSync from 'readline-sync';

export default function greeting() {
  let count = 0;
  console.log('brain-games\nWelcome to the Brain Games!');
  const name = readlineSync.question('May I have your name? ');
  console.log(
    `Hello, ${name}!\nAnswer "yes" if the number is even, otherwise answer "no".`,
  );
  function game() {
    if (count === 3) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const rand = `Question: ${Math.floor(Math.random() * 100)}`;
    const answer = readlineSync.question('Your answer is:  ');
    const answerNum = rand.split(' ')[1] % 2;
    if (answer === 'yes' && answerNum === 0) {
      console.log('Correct!');
      count += 1;
      game(name, count);
    }
    if (answer === 'yes' && answerNum === 1) {
      console.log(
        "'yes' is wrong answer ;(. Correct answer was 'no'.\nLet's try again, Bill!",
      );
      return;
    }
    if (answer === 'no' && answerNum === 1) {
      console.log('Correct!');
      count += 1;
      game(name, count);
    }
    if (answer === 'no' && answerNum === 0) {
      console.log(
        "'no' is wrong answer ;(. Correct answer was 'yes'.\nLet's try again, Bill!",
      );
    }
  }
  game(name, count);
}
