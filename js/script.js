var startBtn = document.getElementById("start");
var questionsBox = document.querySelector(".questionsDiv");
var quizBox = document.getElementById("quiz-container");
var highScoreBtn = document.querySelector(".Highscores");

var questions = [];
var choices = [];
var answers = [];
var score = 0;

// loop thru the questions and if answer is c push the value to answers




    var questions = [  
        {   
         question: "What does parseInt do?",
     
         a: "parses a string argument and returns a floating point number.",
         b: "evaluates JavaScript code represented as a string.",
         c: "parses a string argument and returns an integer of the specified radix",
     
         answer: "C"
        },
     
     {
         question: "how to do declare a variable?",
     
         a: "variable name = value",
         b: "var NAME = value;",
         c: "var name = value;",
     
         answer: "C"
        },
     
     {
         question: "which of these will evaluate to the number 20?",
     
         a: "var twenty = 10 + 10; ",
         b: "var twenty = '10' + '10'; ",
         c: "var twenty = 10 + '10'; ",
     
         answer: "A"
        },
     
     {
         question: "what is the proper syntax for this function?",
     
         a: "myfunction() {console.log('Hello World!';}; ",
         b: "function MYFUNCTION {console.log('Hello World!';}; ",
         c: "function myFunction() {console.log('Hello World!');}; ",
     
         answer: "C"
        }
     ];

     var questions =
     [
       {
           question: "What is the capital of United Kingdom?",
           choices: ["Manchester", "Birmingham", "London", "Birmingham"],
           answer: 2
       },

       {
           question: "What is the capital of United States?",
           choices: ["California", "New York", "Miami", "Florida"],
           answer: 1
       }


     ];




var startBtn = document.getElementById("start");
var questionsBox = document.querySelector(".questionsDiv");
var quizBox = document.getElementById("quiz-container");
var highScoreBtn = document.querySelector(".Highscores");


document.querySelector('#start').addEventListener('click',function(){
    startBtn.style.display='none';

    let counter = 5;

    setInterval(function() {
        counter--;    
        if (counter > 0 ) {
            countdown = document.getElementById("countdown");
            countdown.innerHTML = counter;
        } 
        if (counter === 0) {
            countdown.innerHTML = "End";
            clearInterval(setInterval);
            quizBox.setAttribute("style", "width: 250px; height: 150px");
            questionsBox.style.display = 'none';
            highScoreBtn.style.visibility = 'visible';
        }
    }, 1000);
  
  });

































   
 





