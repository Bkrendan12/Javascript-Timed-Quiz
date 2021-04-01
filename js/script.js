var startBtn = document.querySelector("#start");
var questionsBox = document.querySelector(".questionsDiv");
var quizContainer = document.getElementById("quiz-container");
var questionTitle = document.querySelector("#question");
var choiceText = document.querySelectorAll(".answer");
var wrongAnswer = document.querySelector(".wrong");
var scoreBoard = document.querySelector("#scoreBoard");
var submitBtn = document.querySelector("#submitBtn");
var highscore = document.getElementById("hsBanner");
var board = document.getElementById("scoresContainer");
const body = document.getElementById("body");

var questionsArray = [
  //question one
  {
    question: "What does parseInt do?",

    choice1: "parses a string argument and returns a floating point number.",
    choice2: "evaluates JavaScript code represented as a string.",
    choice3:"parses a string argument and returns an integer of the specified radix",
    choice4: "it pops up a prompt window in your browser.",

    answer: "parses a string argument and returns an integer of the specified radix",
  },

  //question 2

  {
    question: "how to do declare a variable?",

    choice1: "variable name = value",
    choice2: "var NAME = value;",
    choice3: "var name = value;",
    choice4: "var = name.value;",

    answer: "var name = value;",
  },

  //question 2

  {
    question: "which of these will evaluate to the number 20?",

    choice1: "twenty = '20' ",
    choice2: "var twenty = '10' + '10'; ",
    choice3: "var twenty = 10 + '10'; ",
    choice4: "var twenty = 10 + 10; ",

    answer: "var twenty = 10 + 10; ",
  },
  //question 4
  {
    question: "what is the proper syntax for this function?",

    choice1: "myfunction() (console.log('Hello World!'); ",
    choice2: "function MYFUNCTION {console.log('Hello World!'}; ",
    choice3: "function myFunction() {console.log('Hello World!')}; ",
    choice4: "function() = myFunction {console.log(12)} ",

    answer: "function myFunction() {console.log('Hello World!')}; ",
  },
];

var score = 0;
var timer = 5;
var totalQ = 4;

var questionNumber = 0;
var timerScore = 0;

function displayQuestion() {
  var OBJECT = questionsArray[questionNumber];
  var { question, choice1, choice2, choice3, choice4 } = OBJECT;
  var choiceArray = [choice1, choice2, choice3, choice4];

  questionTitle.textContent = question;

  for (var i = 0; i < choiceArray.length; i++) {
    var input = choiceText[i];
    var choice = choiceArray[i];
    input.innerHTML = choice;
  }
}

function clearQuestion() {
  questionsBox.setAttribute("style", "width: 250px; height: 150px");
  quizContainer.setAttribute("style", "width: 25%");
  questionsBox.style.display = "none";
  scoreBoard.style.display = "none";
  submitBtn.style.visibility = "visible";
}

startBtn.addEventListener("click", function () {
  startBtn.style.display = "none";

  displayQuestion();

  for (var i = 0; i < 4; i++) {
    var input = choiceText[i];
    input.addEventListener("click", function (e) {

      if (questionNumber >= questionsArray.length - 1) {
        clearQuestion();
        timerScore = timer;
        return;
      }
      const myPick = e.currentTarget.innerText
      const answer = questionsArray[questionNumber].answer
      console.log(myPick, answer)
      
      if (myPick === answer ) {
        score += 1;
      } else {
          score -= 1;
          timer -= 4
      }

      questionNumber++;
      console.log(questionNumber);
      displayQuestion();
    });
  }

  setInterval(function () {
    timer--;
    countdown = document.getElementById("countdown");
    if(!countdown) return
    if (timer >0) {
      
      countdown.innerHTML = timer;
    }else if (timer === 0) {
      countdown.innerHTML = "End";
      clearInterval(setInterval);
      clearQuestion();
    } else {
        return
    }
  }, 1000);
});

submitBtn.addEventListener("click", function() {
  console.log(body);
  var scoreText = `Your score is ${score} and you finished in ${timerScore} seconds`;
 
  body.innerHTML = `         
  <div  id="hsBanner">
    <h1>HIGH SCORES!</h1>
  </div>

  <div id="scoresContainer">
    ${scoreText}
  </div>`;
  console.log(scoreText);  
});

// timer stopping after first question answered
// Answers not matching up with what I set them as
// console not logging all 4 questions
// subtracting time even after it hits zero so when you submit
// the score, it sometimes shows up in teh negatives
// time interval isnt clearing after the last question is answered 
// AND after the timer runs out. line 132 has the text changing to
// "end" (which isnt happening)
// question 3 all answers are wrong?
// on the quiz wuestion 1 and 2 are choice 3 and it doesnt track whats right
// i answered 1, 2, and 4 correctly because the score didnt subtract, and it only gave me a score of 1

// var characters = [
// 	{name: "Brian", age: 25} ,
// 	{name: "Jim", age: 16} ,
// 	{name: "ted", age: 31} ,
// ]

// for(let i =0; i < characters.length; i++) {

//     if(characters[i].age > 20){
//         console.log(...characters[i].name);
//     }


   
// }
