import readlineSync from 'readline-sync';
import { game, getRndInteger } from '../index.js';

const gameName = 'brain-gcd';

const objective = 'Find the greatest common divisor of given numbers.';

function gameRules() {
  const int1 = getRndInteger(1, 100);
  const int2 = getRndInteger(1, 100);
  let correctAnswer = 0;
  for (let i = 1; i < Math.max(int1, int2); i++) {
    if (int1 % i === 0 && int2 % i === 0) {
      correctAnswer = i;
    }
  }
  const question = `Question: ${int1} ${int2}`;
  console.log(question);
  const answer = Number(readlineSync.question('Your answer is: '));
  return [answer, correctAnswer];
}

export default () => game(objective, gameRules, gameName);
