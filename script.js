var startButton = document.querySelector('#start');
var timeCount = document.querySelector('#quizTimer');

var selA_El = document.querySelector('#A');
var selB_El = document.querySelector('#B');
var selC_El = document.querySelector('#C');
var selD_El = document.querySelector('#D');

// ------ User score and name ------ //
var userScore = document.querySelector('#score');
var userName = document.querySelector('#name');



// ------ Will display the name/score, saved on the browser ------ //

renderLastRegistered();

function renderLastRegistered() {
  var email = localStorage.getItem("email");
  var password = localStorage.getItem("password");

  if (!email || !password) {
    return;
  }

  userEmailSpan.textContent = email;
  userPasswordSpan.textContent = password;
}




// ------ Questions 1-4------ //

var Q1 = {
    question: "What color is the sky?",
    ansA: "1 red",
    ansB: "2 green",
    ansC: "3 blue",
    ansD: "4 purple",
    correctAns: 3
};

var Q2 = {
    question: "What color is the grass?",
    ansA: "1 red",
    ansB: "2 green",
    ansC: "3 blue",
    ansD: "4 purple",
    correctAns: 2
};

var Q3 = {
    question: "What color are the Lakers?",
    ansA: "1 red",
    ansB: "2 green",
    ansC: "3 blue",
    ansD: "4 purple",
    correctAns: 4
};

var Q4 = {
    question: "What color is the rose?",
    ansA: "1 red",
    ansB: "2 green",
    ansC: "3 blue",
    ansD: "4 purple",
    correctAns: 1
};




// ------ Array for cycling through the questions ------ //
var questionBank = [Q1, Q2, Q3, Q4];
var currentQuiestion = questionBank[questionNum];

  function updateApp() {
    currentQuiestion = questionBank
  }





// ------ Input typted  code for the last 3 questions ------ //
document.addEventListener('click', function (event) {
  if (event.target === startButton) {
  updateApp();
  startButton.setAttribute('style', 'display: none;');
  quizInstruction.setAttribute('style', 'display: none');
  selA_El.setAttribute('style', 'display: block;');
  selB_El.setAttribute('style', 'display: block;');
  selC_El.setAttribute('style', 'display: block;');
  selD_El.setAttribute('style', 'display: block;');
  };
});




// ------ 4 buttons to select on the first 4 questions ------ //

document.addEventListener('click', function (event) {
    if (event.target === selA_El || selB_El || selC_El || selD_El) {
        if (event.target.textContent[0] == currentQuiestion.answer) {
          showAnswer.textContent = "Correct!";
          isCorrect = "Correct!";
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

var count = 60;
var timer;

document.addEventListener('click', function(event) {
  if (event.target === startButton) {
    console.log(startButton);
    //runQuiz();
    startTimer();
  }
});

function startTimer() {
  timer = setInterval(function() {
    count--;
    console.log(count);
    timeCount.textContent = count;

    if(count === 0) {
      // Stops execution of action at set interval
      clearInterval(timer);
    }
  }, 1000); // 10000ms = 1s
}






// 10 seconds will be removed per wrong answer

// ------ tracks score of user ------ //

// at the end it will give the score and save the username 
