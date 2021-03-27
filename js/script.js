    var startPage = document.getElementById("start-box");
    var firstQuestion = document.getElementById("questions-box-1");
    var secondQuestion = document.getElementById("questions-box-2");
    var thirdQuestion = document.getElementById("questions-box-3");
    var fourthQuestion = document.getElementById("questions-box-4");

    var answerBox =  document.getElementById("answer-box")
    var endPage = document.getElementById("end-box");
    var scorePage = document.getElementById("score-box");
    
    var startButton = document.getElementById("startBtn");
    var firstButton = document.getElementById("btn1");
    var secondButton = document.getElementById("btn2");
    var thirdButton = document.getElementById("btn3");
    var endButton = document.getElementById("endBtn");


    var student = document.getElementById("student-names");
    var saveButton = document.getElementById("save");
    var savedName = document.getElementById("saved-name");


    var score = 0;  
    var correct = 0;

   

    

    var question = [  
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

    var choice = [];
    var choices = []; 
    var answerA = [];
    var answerB = [];
    var answerC =[] ;
    
function startTimer() {
        var counter = 11;
        setInterval(function() {
            counter--;    
            if (counter > 0 ) {
                countdown = document.getElementById("countdown");
                countdown.innerHTML = counter;
            } 
            if (counter === 0) {
                countdown.innerHTML = "End";
                clearInterval(setInterval);
                endGame();
            }
        }, 1000);
    };


// this function pushed a new array to the first question container//
//use this somehow pushing your question arrays





function startFunction() {
    startPage.style.display="none";
    firstQuestion.style.display="block";
    secondQuestion.style.display="none";
    thirdQuestion.style.display="none";
    fourthQuestion.style.display="none";
    endPage.style.display="none";
    
    startButton.style.display="none"
    firstButton.style.display="block"; 
    secondButton.style.display="none"; 
}

function question1Div() { 

    firstQuestion.style.display="none";
    secondQuestion.style.display="block";
    thirdQuestion.style.display="none";
    fourthQuestion.style.display="none";
    endPage.style.display="none";
    
    firstButton.style.display="none"; 
    secondButton.style.display="block"; 
    thirdButton.style.display="none";
}

function question2Div() { 
    firstQuestion.style.display="none";
    secondQuestion.style.display="none";
    thirdQuestion.style.display="block";
    fourthQuestion.style.display="none";
    endPage.style.display="none";
    
    secondButton.style.display="none"; 
    thirdButton.style.display='block'; 
    endButton.style.display="none";
}

function question3Div() { 
    firstQuestion.style.display="none";
    secondQuestion.style.display="none";
    thirdQuestion.style.display="none";
    fourthQuestion.style.display="block";
    endPage.style.display="none";
    
    thirdButton.style.display="none"; 
    endButton.style.display='block'; 
}

function questionEnd() { 
    firstQuestion.style.display="none";
    secondQuestion.style.display="none";
    thirdQuestion.style.display="none";
    fourthQuestion.style.display="none";
    endPage.style.display="none";

    answerBox.style.display="none";
    endButton.style.display='none'; 
}

function endGame(url) {

    var win = window.open(url, 'https://google.com');
    win.focus();

    firstQuestion.style.display="none";
    secondQuestion.style.display="none";
    thirdQuestion.style.display="none";
    fourthQuestion.style.display="none";
    answerBox.style.display='none';
    endPage.style.display="none";

    startButton.style.display="none";
    firstButton.style.display="none";
    secondButton.style.display="none";
    thirdButton.style.display="none";
    startButton.style.display="none";

    window.open("file:///Users/brendankurbkylo/Desktop/jsTemplates/Highscores/index.html");

}




















   
 





