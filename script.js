// ------ Variables affected by start button ------ //
var startButton = document.querySelector('#start');
var startComment = document.querySelector('#question');
var timeCount = document.querySelector('#quizTimer');
var displayQuestion = document.querySelector('#current-question');

// ------ Variables used for asking/answering questions ------ //
var selA_El = document.querySelector('#A');
var selB_El = document.querySelector('#B');
var selC_El = document.querySelector('#C');
var selD_El = document.querySelector('#D');
var questionBank = [Q1, Q2, Q3, Q4];
var currentQuestion = "";
var questionNum = 0;

// ------ User score for realtime display ------ //
var winCounter = 0;

// ------ User score and name ------ //
var userScore = document.querySelector('#score');
var userName = document.querySelector('#name');
var isCorrect = document.querySelector('#correct-incorrect');




// ------ Start Button Function ------ //
startButton.addEventListener('click', function(event) {
  event.preventDefault();
  console.log(startButton);

  startTimer();
  updateApp();

  startButton.setAttribute('style', 'display: none;');
  startComment.setAttribute('style', 'display: none');
  //quizInstruction.setAttribute('style', 'display: none');

  selA_El.setAttribute('style', 'display: block;');
  selB_El.setAttribute('style', 'display: block;');
  selC_El.setAttribute('style', 'display: block;');
  selD_El.setAttribute('style', 'display: block;');
});




// ------ Questions 1-4------ //

var Q1 = {
    question: "What color is the sky?",
    ansA: "1 red",
    ansB: "2 green",
    ansC: "3 blue",
    ansD: "4 purple",
    answer: 3
};

var Q2 = {
    question: "What color is the grass?",
    ansA: "1 red",
    ansB: "2 green",
    ansC: "3 blue",
    ansD: "4 purple",
    answer: 2
};

var Q3 = {
    question: "What color are the Lakers?",
    ansA: "1 red",
    ansB: "2 green",
    ansC: "3 blue",
    ansD: "4 purple",
    answer: 4
};

var Q4 = {
    question: "What color is the rose?",
    ansA: "1 red",
    ansB: "2 green",
    ansC: "3 blue",
    ansD: "4 purple",
    answer: 1
};





var selA_El = document.querySelector('#A');
var selB_El = document.querySelector('#B');
var selC_El = document.querySelector('#C');
var selD_El = document.querySelector('#D');
var questionBank = [Q1, Q2, Q3, Q4];
var currentQuestion = "";
var questionNum = 0;
    console.log(questionBank);
    console.log(currentQuestion);
    console.log(questionNum);

// ------ Array for cycling through the questions ------ //
  function updateApp() {
    if (questionNum < 4) {
    console.log(questionNum);
    
    currentQuestion = questionBank[questionNum];
    console.log(questionBank);
    console.log(currentQuestion);
    
    displayQuestion.textContent = currentQuestion.question;
    selA_El = currentQuestion.ansA;
    selB_El = currentQuestion.ansB;
    selC_El = currentQuestion.ansC;
    selD_El = currentQuestion.ansD;
    return currentQuestion;
    }
  }




// ------ Keeps track of score ------ //
function setWins() {
  window.textContent = winCounter;
  localStorage.setItem("winCount", winCounter);
}




// ------ 4 buttons to select on the first 4 questions ------ //

document.addEventListener('click', function (event) {
  event.preventDefault();
    if (event.target === selA_El || selB_El || selC_El || selD_El) {
        if (event.target.textContent[0] == currentQuestion.answer) {
          showAnswer.textContent = "Correct!";
          isCorrect = "Correct!";
          winCounter++;
          questionNum++;
          finalScore++;
          updateApp();
          console.log(isCorrect);
        }

        else {
          showAnswer.textContent = "Incorrect!";
          isCorrect = "Incorrect!";
          questionNum++;
          count -= 10;
          updateApp();
          console.log(isCorrect);
        }
    }
});




// ------ Timer section (-10 sec per incorrect answer in previous block) ------ //

var count = 10;
var timer;

function startTimer() {
  timer = setInterval(function() {
    count--;
    console.log(count);
    timeCount.textContent = count;

    if(count === 0) {
      userScore = winCounter;
      userName = window.prompt("Please enter a username");
      console.log(userName);
  
      // Stops execution of action at set interval
      clearInterval(timer);
    }
  }, 1000); // 10000ms = 1s
}






// 10 seconds will be removed per wrong answer

// ------ tracks score of user ------ //

// at the end it will give the score and save the username 



// ------ Start Button Alternative ------ //
// document.addEventListener('click', function (event) {
//   if (event.target === startButton) {
//     event.preventDefault();
//     updateApp();

//   startButton.setAttribute('style', 'display: none;');
//   startComment.setAttribute('style', 'display: none');
//   quizInstruction.setAttribute('style', 'display: none');

//   selA_El.setAttribute('style', 'display: block;');
//   selB_El.setAttribute('style', 'display: block;');
//   selC_El.setAttribute('style', 'display: block;');
//   selD_El.setAttribute('style', 'display: block;');
//   };
// });



// ------ Start Button Alternative ------ //
// document.addEventListener('click', function(event) {
//   event.preventDefault();
//   if (event.target === startButton) {
//     console.log(startButton);
//     //runQuiz();
//     startTimer();
//     updateApp();
//   }
// });




// ------ Will display the name/score, saved on the browser ------ //

// renderLastRegistered();

// function renderLastRegistered() {
//   var email = localStorage.getItem("email");
//   var password = localStorage.getItem("password");

//   if (!email || !password) {
//     return;
//   }

//   userEmailSpan.textContent = email;
//   userPasswordSpan.textContent = password;
// }