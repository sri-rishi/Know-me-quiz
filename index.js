const readlineSync = require("readline-sync");

let score = 0;

const userName = readlineSync.question("What is your name? ");

console.log(`Welcome ${userName} let's start game.`);

const highScore = [{
  name: "Rishi",
  score: 5
},
{
  name: "Abha",
  score: 4
}];

const play = (question, answer) => {
  const userAnswer = readlineSync.question(question);

  if (userAnswer.toUpperCase() === answer.toUpperCase()) {
    console.log("right");
    score = score + 1;
  } else {
    console.log("wrong");
    score = score - 1;
  }
  console.log(`Your current score is ${score}.`);
  console.log("__________________");
};

const questions = [{
  question: "Where do Rishi live? ",
  answer: "Lucknow"
},
{
  question: "Who is Rishi's favourite superhero? ",
  answer: "Ironman"
},
{
  question: "Which place Rishi love to visit?",
  answer: "Kedarnath"
},
{
  question: "Which sport is his favourite sport?",
  answer: "Cricket"
},
{
  question: "Who is his favourite actor?",
  answer: "Shahrukh Khan" 
}];

for(let i = 0; i<questions.length; i++) {
  let currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

for(let i=0;i<highScore.length;i++) {
  console.log(highScore[i].name);
  console.log(highScore[i].score);
}
console.log("If you have beaten high score ,please send me screenshot of your score.");
