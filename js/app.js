'use strict';

var userName = prompt('Hello what is your name?');

alert('Hello ' + userName + ' I don\'t expect a 100% but I hope you get at least more than one right!');
var rightCounter = 0;
var wrongCounter = 0;

// 1st question
var amountOfSleep = prompt('Do I get a lot of sleep?').toLowerCase();

if(amountOfSleep === 'yes') {
  rightCounter++;
  alert('Correct. I try to get at least 6 hours of sleep everyday');
} else if (amountOfSleep === 'no') {
  wrongCounter++;
  alert('Incorrect. I think 6 hours is plenty of sleep!');
} else {
  alert('Just answer with a yes or no please');
}

// 2nd question
var onlyOnSundays = prompt('On a Sunday, do I have time to make breakfast?').toLowerCase();

if(onlyOnSundays === 'yes'){
  rightCounter++;
  alert('Correct. I usually do make /breakfast/... around 11 o/clock');
} else if(onlyOnSundays === 'no'){
  wrongCounter++;
  alert('Incorrect. I have to eat in the morning!');
}
else{
  alert('just answer with a yes or no please');
}

// 3rd question
var sundayFood = prompt('Do I eat a heavy meal during lunch time?').toLowerCase();
if(sundayFood === 'yes') {
  rightCounter++;
  alert('Correct! My lunch usually includes sandwitches and salad');
} else if(sundayFood === 'no') {
  wrongCounter++;
  alert('Incorrect! I will starve myself to death...');
} else{
  alert('you know the drill yes or no answers please.');
}

// // 4th question
var favMeal = prompt('Do I like pizza more than I like hotdogs?').toLowerCase();

if(favMeal === 'yes') {
  rightCounter++;
  alert('You are right! Hotdogs do not fill me up');
} else if(favMeal === 'no') {
  wrongCounter++;
  alert('You are wrong! Hotdogs are not satisfying');
} else {
  alert('Please say yes or no.');
}

// 5th question
var happyMeal = prompt('If I do not have time to make food, do I rely on Mcdonalds for a meal?').toLowerCase();

if(happyMeal === 'yes') {
  rightCounter++;
  alert('Correct, maybe hashbrowns but that is it.');
} else if(happyMeal === 'no') {
  wrongCounter++;
  alert('Incorrect! If I have no time then McDonald it is');
} else {
  alert('please answer with yes or no');
}

// 6th question numeric input portion of guessing game. 
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
  } if(favNum > guessNum){
    wrongCounter++;
    alert('too low of guess, please try again!');
  } if(favNum < guessNum){
    wrongCounter++;
    alert('too high of a guess, please try again');
  }
}

// 7th question 
//making an array guess question. Not sure if this is placed here. 
var favPlace = ['Spain', 'California', 'Japan', 'Mexico'];

//create a for loop to prompt names of places and 
//compare with fav places
var correctGuess = false;
for (var tries = 0; tries < 6; tries++) {
  //prompt guess
  var guessPlace = prompt('Can you guess my favorite place to go for vacation?').toLowerCase();
  //check if guess is correct
  //by looping through the favPlace array
  for (var i = 0; i < favPlace.length; i++) {
    //get current place
    var place = favPlace[i].toLowercase();
    //check if equals
    if (place === guessPlace) {
      correctGuess = true;
      //break out of the for loop
      break;
    }
  }
}
//check if the user correctly guessed the answer
if (correctGuess) {
  rightCounter++;
  alert('Correct, that ' + guessPlace + 'is one of my 4 favorite places!');
}
else {
  wrongCounter++;
  alert('Incorrect, try again!');
}


if (rightCounter > wrongCounter) {
  alert('Congrats! Thanks for taking the time to getting to know me, you got ' + rightCounter + '/7 questions correct');
  console.log('congrats! Thanks for taking the time to getting to know me');
} else {
  alert('Totally fine. I only just met you. You got ' + rightCounter + '/7 right. Better luck next time.');
}

