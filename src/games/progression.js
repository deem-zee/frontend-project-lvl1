import readlineSync from 'readline-sync';
import { game, getRndInteger } from '../index.js';

const gameName = 'brain-progression';

const objective = 'What number is missing in the progression?';

function gameRules() {
  const start = getRndInteger(1, 10);
  const step = getRndInteger(1, 10);
  const missing = getRndInteger(0, 9);
  let correctAnswer = 0;
  const progression = [start];
  for (let i = 1; i < 10; i++) {
    progression[i] = progression[i - 1] + step;
  }
  correctAnswer = progression[missing];
  progression[missing] = '..';
  const question = `${progression}`;
  console.log(question.split(',').join(' '));
  const answer = Number(readlineSync.question('Your answer is: '));
  return [answer, correctAnswer];
}

export default () => game(gameName, objective, gameRules);
