var startBtn = document.querySelector("#start");
var questionsBox = document.querySelector(".questionsDiv");
var quizContainer = document.getElementById("quiz-container");
var highScoreBtn = document.querySelector(".Highscores");

var questionTitle = document.querySelector("#question");

var test = document.querySelector("#question");



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


startBtn.addEventListener('click',function(){
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
            questionsBox.setAttribute("style", "width: 250px; height: 150px");
            questionsBox.style.display = 'none';
            highScoreBtn.style.visibility = 'visible';
        
            
        }
    }, 1000);
  
  });













    //  let SCORE_POINTS = 100;
    //  let MAX_QUESTIONS = 4;

    //  function startGame() {
    //     questionCounter = 0;
    //     score = 0;
    //     availableQuestions = [...questions];
    //     getNewQuestion();   
    //  }
 
    //  function getNewQuestion() {
    //      if(availableQuestions.length === 0 || questionCounter > MAX_QUESTIONS) {
    //          localStorage.setItem('mostRecentScore', score)
    //          return window.location.assign('/end.html')
    //      }

    //      questionCounter++
    //      let questionIndex = Math.floor(Math.random() * availableQuestions.length)
    //      currentQuestion = availableQuestions[questionIndex]
    //      question.innertext = currentQuestion.question
    //      choices.forEach(choice => {
    //          let number = choice.dataset['number']
    //          choice.innertext = currentQuestion['choice']
    //      })

    //      availableQuestions.splice(questionIndex, 1)

    //      acceptingAnswers = true;
    //  }

    //  choices.forEach(choice => {
    //      choice.addEventListener('click', e => {
    //          if(!acceptingAnswers)
    //          return
    //          acceptingAnswers = false;
    //          let selectedChoice = e.target
    //          let selectedAnswers = selectedChoice.dataset['number'];
    //          let classToApply = selectedAnswer == currentQuestion.asnwer ? 'correct' : 'incorrect'

    //          if(classToApply === 'correct') {
    //              incrementScore(SCORE_POINTS);

    //          }

    //          selectedChoice.parentElement.classList.add(classToApply)
    //      })
    //  })










   
 





