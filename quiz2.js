console.log("........................................");
console.log("Hi, This is Harshith!!!");
console.log("........................................");

var score = 0;
var myReadLineSync = require('readline-sync');
var userName = myReadLineSync.question("What's Your Name ?");
console.log();
console.log("Welcome to the Football quiz", userName);
console.log("........................................");

const queAnsArr = [
  {
    question: `FC Barcelona based on which country?
    a) Spain
    b) Portgal
    c) Germany
    d) Italy `,
    answer: "a"
  },

  {
    question: `Which nation won the 2018 FIFA world cup?
    a) Argentina
    b) Italy
    c) France
    d) Spain `,
    answer: "c"
  },

  {
    question: `Which country has won the most World Cups?
    a) Germany
    b) Brazil
    c) Italy
    d) Argentina `,
    answer: "b"
  },

  {
    question: `Which German multinational sportswear company has Messi an an ambassador?
    a) Nike
    b) Adidas
    c) Puma
    d) New Balance `,
    answer: "b"
  },

  {
    question: `Who has won a record number of Ballon d'Or awards in Football?
    a) Ronaldinho
    b) Ronaldo
    c) Kaka
    d) Messi `,
    answer: "d"
  }
];

function footyQuiz(question, answer) {
  var userAns = myReadLineSync.question(question);

  if (userAns === answer) {
    console.log("Yes, It's the right answer.");
    score++;

  } else {
    console.log("Sorry, That's not the right answer. The right answer is: ", answer);
  }
  console.log("Your score is: ", score);
  console.log("...............................................................")

}

function quiz() {
  for (var i = 0; i < queAnsArr.length; i++) {
    var currentQue = queAnsArr[i];
    footyQuiz(currentQue.question, currentQue.answer)
  }
}

quiz();
console.log()
console.log("Your final score is: ", score)



// ........
// ...footyQuiz.apply.apply.