// ------ Variables affected by start button ------ //
var startButton = document.querySelector('#start');
var startComment = document.querySelector('#question');
var timeCount = document.querySelector('#quizTimer');
var displayQuestion = document.querySelector('#current-question');
var displayButton = document.querySelector('#selection');

// ------ User score for realtime display ------ //
var finalScore = 0;

// ------ User score and name ------ //
var storedScore = document.querySelector('#score');
var storedName = document.querySelector('#name');
var isCorrect = document.querySelector('#correct-incorrect');




// ------ Will display the name/score, saved on the browser ------ //
function renderLastRegistered() {
storedScore = localStorage.getItem("Top Score");
storedName = localStorage.getItem("User Name");
}




// ------ Start Button Function ------ //
startButton.addEventListener('click', function (event) {
  event.preventDefault();
  startTimer();
  updateApp();
  startButton.setAttribute('style', 'display: none;');
  startComment.setAttribute('style', 'display: none');
  displayButton.setAttribute('style', 'display: block;');
});




// ------ Questions 1-4------ //
var Q1 = {
  question: "What is an array?",
  ansA: "1 object",
  ansB: "2 variable",
  ansC: "3 list of objects",
  ansD: "4 function",
  answer: 3
};

var Q2 = {
  question: "What is css used for?",
  ansA: "1 performs functions on variables",
  ansB: "2 to style the webpage",
  ansC: "3 give the website its structure",
  ansD: "4 links the programs together",
  answer: 2
};

var Q3 = {
  question: "What do we store values in?",
  ansA: "1 class",
  ansB: "2 id",
  ansC: "3 function",
  ansD: "4 variable",
  answer: 4
};

var Q4 = {
  question: "What character do we use to define an id in css?",
  ansA: "1 #",
  ansB: "2 !",
  ansC: "3 .",
  ansD: "4 /",
  answer: 1
};




// ------ For cycling through the questions ------ //
var selA_El = document.querySelector('#A');
var selB_El = document.querySelector('#B');
var selC_El = document.querySelector('#C');
var selD_El = document.querySelector('#D');
var questionBank = [Q1, Q2, Q3, Q4];
var currentQuestion = questionBank[questionNum];
var questionNum = 0;

function updateApp() {
  if (questionNum < 4) {
    console.log(questionNum);

    currentQuestion = questionBank[questionNum];
    console.log(questionBank);
    console.log(currentQuestion);

    displayQuestion.textContent = currentQuestion.question;
    selA_El.textContent = currentQuestion.ansA;
    selB_El.textContent = currentQuestion.ansB;
    selC_El.textContent = currentQuestion.ansC;
    selD_El.textContent = currentQuestion.ansD;
    return currentQuestion;
  }
}




// ------ 4 buttons to select on the first 4 questions ------ //
document.addEventListener('click', function (event) {
  event.preventDefault();
  if (event.target === selA_El || event.target === selB_El || event.target === selC_El || event.target === selD_El) {
    if (event.target.textContent[0] == currentQuestion.answer) {
      //showAnswer.textContent = "Correct!";
      isCorrect.textContent = "Correct!";
      finalScore++;
      questionNum++;
      updateApp();
      console.log(isCorrect);
    }

    else {
      //showAnswer.textContent = "Incorrect!";
      isCorrect.textContent = "Incorrect!";
      questionNum++;
      count -= 10;
      updateApp();
      console.log(isCorrect);
    }
  }
});




// ------ Timer section (-10 sec per incorrect answer in previous block) ------ //
var count = 60;
var timer;

function startTimer() {
  timer = setInterval(function () {
    count--;
    //console.log(count);
    timeCount.textContent = count;

    if (count === 0 || questionNum === 4) {
      //userScore = finalScore;
      userName = window.prompt("Please enter a username");
      console.log(userName);
      setStorage();
      storedScore.textContent = finalScore;
      // Stops execution of action at set interval
      clearInterval(timer);
    }
  }, 1000); // 10000ms = 1s
}

// ------ Keeps track of score ------ //
function setStorage() {
  localStorage.setItem("Top Score", finalScore);
  localStorage.setItem("User Name", userName);
}

renderLastRegistered();