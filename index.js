var readlineSync = require("readline-sync");

var score = 0;

var userName = readlineSync.question("What is your name? ");

console.log(`Welcome ${userName} let's start game.`);

var highScore = [{
  name: "Rishi",
  score: 5
},
{
  name: "Abha",
  score: 4
}];

const play = (question, answer) => {
  var userAnswer = readlineSync.question(question);

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

var questions = [{
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

for(var i = 0; i<questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}

for(i=0;i<highScore.length;i++) {
  console.log(highScore[i].name);
  console.log(highScore[i].score);
}
console.log("If you have beaten high score ,please send me screenshot of your score.");
