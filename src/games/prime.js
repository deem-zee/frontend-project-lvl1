import readlineSync from 'readline-sync';
import { game, getRndInteger } from '../index.js';

const gameName = 'brain-prime';

const objective =
  'Answer "yes" if given number is prime. Otherwise answer "no"';

function gameRules() {
  const int = getRndInteger(1, 100);
  let correctAnswer = '';
  let count = 0;
  for (let i = 2; i < int; i++) {
    if (int % i === 0) {
      count += 1;
    }
  }
  if (count > 0) {
    correctAnswer = 'no';
  } else {
    correctAnswer = 'yes';
  }

  const question = `Question: ${int}`;
  console.log(question);
  const answer = readlineSync.question('Your answer is: ');
  return [answer, correctAnswer];
}

export default () => game(objective, gameRules, gameName);
