import readlineSync from 'readline-sync';

function game(objective, gameRules, gameName = 'brain-games') {
  console.log(`${gameName}\nWelcome to the Brain Games!`);
  const name = readlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(objective);
  let round = 0;
  const roundToWin = 3;
  while (round < roundToWin) {
    const play = gameRules();
    const answer = play[0];
    const correctAnswer = play[1];
    if (answer === correctAnswer) {
      if (round === 2) {
        console.log(`Congratulations, ${name}!`);
        return;
      }
      console.log('Correct!');
      round += 1;
    } else {
      console.log(
        `${answer} is wrong ;( . Correct answer was ${correctAnswer}\nLet's try again, ${name}!`,
      );
      return;
    }
  }
}

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { game, getRndInteger };
