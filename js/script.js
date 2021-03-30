var startBtn = document.querySelector("#start");
var questionsBox = document.querySelector(".questionsDiv");
var quizContainer = document.getElementById("quiz-container");


var questionTitle = document.querySelector("#question");

var choiceText = document.querySelector(".answer");
var wrongAnswer = document.querySelector(".wrong");
var scoreBoard = document.querySelector("#scoreBoard");
var submitBtn = document.querySelector("#submitBtn")


var questionsArray = [  
        {   
         question: "What does parseInt do?",
     
         choice1: "parses a string argument and returns a floating point number.",
         choice2: "evaluates JavaScript code represented as a string.",
         choice3: "parses a string argument and returns an integer of the specified radix",
         choice4: "it pops up a prompt window in your browser.",
     
         answer: 3,
        },
     
     {
         question: "how to do declare a variable?",
     
         choice1: "variable name = value",
         choice2: "var NAME = value;",
         choice3: "var name = value;",
         choice4: "var = name.value;",
     
         answer: 3,
        },
     
     {
         question: "which of these will evaluate to the number 20?",
     
         choice1: "twenty = '20' ",
         choice2: "var twenty = '10' + '10'; ",
         choice3: "var twenty = 10 + '10'; ",
         choice4: "var twenty = 10 + 10; ",
     
         answer: 4,
        },
     
     {
         question: "what is the proper syntax for this function?",
     
         choice1: "myfunction() (console.log('Hello World!'); ",
         choice2: "function MYFUNCTION {console.log('Hello World!'}; ",
         choice3: "function myFunction() {console.log('Hello World!')}; ",
         choice4: "function() = myFunction {console.log(12)} ",

         answer: 3,
        }
     ];

     var score = 0;
     var timer = 11;

startBtn.addEventListener('click',function(){
    startBtn.style.display='none';   

    setInterval(function() {
        timer--;    
        if (timer > 0 ) {
            countdown = document.getElementById("countdown");
            countdown.innerHTML = timer;
        } 
        if (timer === 0) {
            countdown.innerHTML = "End";
            clearInterval(setInterval);
            questionsBox.setAttribute("style", "width: 250px; height: 150px");
            quizContainer.setAttribute("style", "width: 25%")
            questionsBox.style.display = 'none';
            scoreBoard.style.display = 'none';
            submitBtn.style.visibility = 'visible';
        }
    }, 1000);
  
  });

  function scoreUpDown() {
    scoreBoard.textContent = score;
  }
  choiceText.addEventListener("click", function() {
    score++;
    scoreUpDown();
  })
  
  wrongAnswer.addEventListener("click", function() {
    timer = timer-8;
    
    if (score > 0 && timer >= 8) {
        score--;
    }

    scoreUpDown();
  })
 
 

  




















   
 




//   let quizQuestions = [
//     ["What does parseInt do?",

//        [ "evaluates JavaScript code represented as a string", 
//          "parses a string argument and returns an integer of the specified radix",
//          "it pops up a prompt window in your browser",
//          "it turns a string into a number"
//         ], 

//          "parses a string argument and returns an integer of the specified radix"],

    
//     ["how to do declare a variable?", 
        
//         [ "variable name = value",
//           "var name = value;",
//           "var = name.value;",
//           "var.name.value"
//          ],

//          "var name = value;"],

//     ["which of these will evaluate to the number 20?",

//         [ "twenty = '20' ",
//           "var twenty = '10' + '10'; ",
//           "var twenty = 10 + '10'; ",
//           "var twenty = 10 + 10; "
//           ],

//            "var twenty = 10 + 10; "],

//     ["what is the proper syntax for this function?",
     
//         [ "myfunction() (console.log('Hello World!'); ",
//           "function MYFUNCTION {console.log('Hello World!'}; ",
//           "function myFunction() {console.log('Hello World!')}; ",
//           "function() = myFunction {console.log(12)} ",
//          ],

//           "function() = myFunction {console.log(12)} "]     

//     ]