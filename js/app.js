'use strict';

var userName = prompt('Hello what is your name?');

alert('Hello ' + userName + ' I don\'t expect a 100% but I hope you get at least more than one right!');
var rightCounter = 0;
var wrongCounter = 0;

askTheFiveQuestions();
askQuestionSix();
askQuestionSeven();
reportResults();

function askTheFiveQuestions() {
  // declare arrays of questions and answers
  // loop through all questions
  // collect answers in another array
  var question = [
    'Do I get a lot of sleep?',
    'On a Sunday, do I have time to make breakfast?',
    'Do I eat a heavy meal during lunch time?',
    'Do I like pizza more than I like hotdogs?',
    'If I do not have time to make food, do I rely on Mcdonalds for a meal?',
  ];
  var rightAnswer = ['yes', 'yes', 'yes', 'yes', 'yes'];
  //2d array, row 0 right response, row 1 wrong response.
  //2nd index is question number.  So responses[0][2] is
  //used if 3rd question is answered correctly.
  var response = [
    [
      'Correct. I try to get at least 6 hours of sleep everyday',
      'Correct. I usually do make breakfast... around 11 o\'clock',
      'Correct! My lunch usually includes sandwitches and salad',
      'You are right! Hotdogs do not fill me up',
      'Correct, maybe hashbrowns but that is it.'
    ],
    [
      'Incorrect. I think 6 hours is plenty of sleep!',
      'Incorrect. I have to eat in the morning!',
      'Incorrect! I need a full meal at mid-day...',
      'You are wrong! Hotdogs are not satisfying',
      'Incorrect! If I have no time then McDonald it is'
    ]
  ];
  var usersGuess;

  for (var q = 0; q < question.length; q++) {
    usersGuess = prompt(question[q]).toLowerCase();
    if (usersGuess === rightAnswer[q]) {
      rightCounter++;
      alert(response[0][q]);
    } else if (usersGuess === 'yes' || usersGuess === 'no') {
      wrongCounter++;
      alert(response[1][q]);
    } else {
      alert('Just answer with a yes or no please');
    }
  }
}

// 6th question numeric input portion of guessing game.
function askQuestionSix() {
  console.log('Executing askQuestionSix');
  var favNum = 7;
  var numberOfTries = 4;
  var guessNum;

  while(numberOfTries > 0){
    guessNum = parseInt(prompt('Can you guess my favorite number?'));
    numberOfTries--;
    if(favNum === guessNum){
      rightCounter++;
      alert('Correct!');
      break;
    } else if(favNum > guessNum){
      wrongCounter++;
      alert('too low of guess, please try again!');
    } else {
      wrongCounter++;
      alert('too high of a guess, please try again');
    }
  }
}

// 7th question
function askQuestionSeven() {
  console.log('Executing askQuestionSeven');
  //making an array guess question. Not sure if this is placed here.
  var favPlace = ['Spain', 'California', 'Japan', 'Mexico'];

  //create a for loop to prompt names of places and
  //compare with fav places
  var correctGuess = false;
  for (var tries = 0; tries < 6; tries++) { //the guess loop
    //prompt guess
    var guessPlace = prompt('Can you guess my favorite place to go for vacation?').toLowerCase();
    console.log('user guessed', guessPlace);
    //check if guess is correct
    //by looping through the favPlace array
    for (var i = 0; i < favPlace.length; i++) {
      //check if equals
      if (favPlace[i].toLowerCase() === guessPlace) {
        correctGuess = true;
        //break out of the for loop
        break;
      }
    }
    //check if the user correctly guessed the answer
    if (correctGuess) {
      rightCounter++;
      alert('Correct, ' + favPlace[i] + ' is one of my 4 favorite places!');
      break;
    }
    else {
      wrongCounter++;
      alert('Incorrect, try again!');
    }
  }
}

function reportResults() {
  if (rightCounter > wrongCounter) {
    alert('Congrats! Thanks for taking the time to getting to know me, you got ' + rightCounter + '/7 questions correct');
    console.log('congrats! Thanks for taking the time to getting to know me');
  } else {
    alert('Totally fine. I only just met you. You got ' + rightCounter + '/7 right. Better luck next time.');
  }
}