var readlineSync = require("readline-sync");

var score = 0;

var highScores = []


var questions = [{
  question: "What's the full and original name of Captain America? ",
  answer: "Steve Rogers"
}, {
  question: "Who is the king of Asguard? ",
  answer: "Thor"
},
{
  question: "Do you know what's Spiderman's real name? ",
  answer: "Peter Parker"
},
{
  question: "In which year does the Iron-Man 1 was released? ",
  answer: "2008"
},
{
  question: "what is the name of winter-soilder? ",
  answer: "Bucky"
}
];

function welcome() {
  var userName = readlineSync.question("What's your name? ");
  highScores.push({ name: userName.toUpperCase(), score: 0 });
  console.log("Welcome " + userName.toUpperCase() + " let's see if you know Marvel Cinematic Universe !!!");
}


// play function
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer.toUpperCase() === answer.toUpperCase()) { // branching
    console.log("right!");
    score = score + 1;

  } else {
    console.log("wrong!");

  }

  console.log("current score: ", score);
  console.log("-------------")
}

function game() {
  for (var i = 0; i < questions.length; i++) {
    var currentQuestion = questions[i];
    play(currentQuestion.question, currentQuestion.answer)
  }
  highScores[0].score = score;
}

function showScores() {
  if (score > 0) {
    console.log("YAY! You SCORED: ", score);
  }
  else {
    console.log("Ohh! Better luck next time!! ");
  }
  console.log("Check out the high scores, if you should be there ping me and I'll update it");

  highScores.map(score => console.log(score.name, " : ", score.score))
}


welcome();
game();
showScores();


