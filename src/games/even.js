import readlineSync from 'readline-sync';
import { game, getRndInteger } from '../index.js';

const gameName = '';

const objective = 'Answer "yes" if the number is even, otherwise answer "no".';

function gameRules() {
  const int = getRndInteger(1, 100);
  let correctAnswer = '';
  if (int % 2 === 0) {
    correctAnswer = 'yes';
  } else {
    correctAnswer = 'no';
  }
  const question = `Question: ${int}`;
  console.log(question);
  const answer = readlineSync.question('Your answer is: ');
  return [answer, correctAnswer];
}

export default () => game(objective, gameRules, gameName);
