import readlineSync from 'readline-sync';

const rounds = 3;

const runGame = (rules, round) => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May I have your name?: ');
  console.log(`Hello, ${name}!`);
  console.log(rules);

  for (let i = 0; i < rounds; i += 1) {
    const [question, correctAnswer] = round();
    console.log(`Question: ${question} `);
    const input = readlineSync.question('Your answer: ');

    if (correctAnswer !== input) {
      console.log(`'${input}' is wrong answer ;(. Correct answer was '${correctAnswer}'`);
      console.log(`Let's try again, ${name}!`);
      return;
    }

    console.log('Correct!');
  }

  console.log(`Congratulations, ${name}!`);
};

export default runGame;
