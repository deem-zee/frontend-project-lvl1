import readlineSync from 'readline-sync';
import { game, getRndInteger } from '../index.js';

const gameName = 'brain-calc';

const objective = 'What is the result of the expression?';

function gameRules() {
  const int1 = getRndInteger(1, 100);
  const int2 = getRndInteger(1, 100);
  const operand = ['+', '-', '*'][getRndInteger(0, 2)];
  let correctAnswer = 0;
  if (operand === '+') {
    correctAnswer = int1 + int2;
  }
  if (operand === '-') {
    correctAnswer = int1 - int2;
  }
  if (operand === '*') {
    correctAnswer = int1 * int2;
  }
  const question = `${int1} ${operand} ${int2}`;
  console.log(question);
  const answer = Number(readlineSync.question('Your answer is: '));
  return [answer, correctAnswer];
}

export default () => game(gameName, objective, gameRules);
