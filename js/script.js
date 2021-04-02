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
    question: "how do you declare a variable?",

    choice1: "variable name = value",
    choice2: "var name = value;", 
    choice3: "var.NAME = value;",
    choice4: "var = name.value;",

    answer: "var name = value;",
  },

  //question 2

  {
    question: "which of these will evaluate to the number 20?",

    choice1: "var twenty = 10 + 10; ",
    choice2: "var twenty = '10' + '10'; ",
    choice3: "var twenty = 10 + '10'; ",
    choice4: "twenty = '20' ",

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
var timer = 20;
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
//   startBtn.style.display = "none";
startBtn.setAttribute("style", "display: none;")

  displayQuestion();

  for (var i = 0; i < 4; i++) {
    var input = choiceText[i];
    input.addEventListener("click", function (e) {

      const myPick = e.currentTarget.textContent
      const answer = questionsArray[questionNumber].answer
      console.log(myPick, answer)
      
      if (myPick === answer ) {
        score += 1;
      } else {
          
          timer -= 5
      }

      questionNumber++;
      console.log(questionNumber);
      if (questionNumber >= questionsArray.length ) {  
        clearQuestion();
        clearInterval(interval);
        countdown.innerHTML = "End";
        timerScore = timer;
        return;     
      } 

      displayQuestion();
    });
  }
  
  let interval = setInterval(function () {
    timer--;
    countdown = document.getElementById("countdown");
    if(!countdown) return // what does return do
    if (timer >0) {
      
      countdown.innerHTML = timer;
    }else if (timer === 0) {
      countdown.innerHTML = "End";
      clearInterval(interval);
      clearQuestion();
    } else {
        return // what does return do
    }
  }, 1000);
});

submitBtn.addEventListener("click", function() {
  console.log(body);
  var scoreName = document.querySelector("#enter-name");
  //scoreName.textContent = ?
  var scoreText = `Score: ${score} You finished the quiz in ${timerScore} seconds`;
 
  body.innerHTML = `         
  <div  id="hsBanner">
    <h1>HIGH SCORES!</h1>
  </div>

  <div id="scoresContainer">
    ${scoreText}
  </div>`;
  console.log(scoreText);  
});


////////// WHEN the game is over
////////// THEN I can save my initials and score

///////// AS A coding boot camp student
///////// I WANT to take a timed quiz on JavaScript fundamentals that stores high scores
///////// SO THAT I can gauge my progress compared to my peers

///////// How to store saved name to highscores page
