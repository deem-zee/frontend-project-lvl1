import { game, getRndInteger } from '../index.js';
import readlineSync from 'readline-sync';
const objective = 'What is the result of the expression?';

function gameRules() {
  let int1 = getRndInteger(1, 100);
  let int2 = getRndInteger(1, 100);
  let operand = ['+', '-', '*'][getRndInteger(0, 2)];
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
  let question = `${int1} ${operand} ${int2}`;
  console.log(question);
  let answer = Number(readlineSync.question('Your answer is: '));
  return [answer, correctAnswer];
}

game(objective, gameRules);
