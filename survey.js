const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = {};
const name = 'What is your name?';
const meal = 'What is your favourite food?';
const activity = 'What activities do you like? ';
const sport = 'What is your favourite sport? ';
const movie = 'What is your favourite movie? ';
const superpower = 'What is your superpower? ';


console.log('Welcome to the Profile Generator');
rl.question(name, (answer) => {
  answers.name = answer;
  rl.question(meal, (answer) => {
    answers.meal = answer;
    rl.question(activity, (answer) => {
      answers.activity = answer;
      rl.question(sport, (answer) => {
        answers.sport = answer;
        rl.question(movie, (answer) => {
          answers.movie = answer;
          rl.question(superpower, (answer) => {
            answers.superpower = answer;
            console.log(`${answers.name} loves eating ${answers.meal} before ${answers.activity}.  They like to watch ${answers.sport} of the movie ${answers.movie}.  During ${answers.name}'s downtime they save the city with their ${answers.superpower}`);
            rl.close();
          });
        });
      });
    });
  });
});
