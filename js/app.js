'use strict';

//var userName = 'Kevin';
//console.log(userName);
// 1st question

var myName = prompt('My name is Kevin, what is your name?');
console.log('Hello' + myName + 'This game will introduce to you a couple of my sleeping habits');
var amountOfSleep = prompt('Do I get more than 6 hours of sleep if I sleep at 12am? Please only answer with yes or no').toLowerCase();

if(amountOfSleep === 'yes') {
  alert('Only on Sundays');
} else if (amountOfSleep === 'no') {
  alert('Seattle construction starts 6 in the morning...');
} else {
  alert('Just answer with a yes or no please');
}
// 2nd question
var onlyOnSundays = prompt('On a Sunday, do I have time to make breakfast?').toLowerCase();

if(onlyOnSundays === 'yes'){
  alert('I usually do make /breakfast/... around 11 o/clock');
} else if(onlyOnSundays === 'no'){
  alert('I value sleep more than I value substanance');
}
else{
  alert('just answer with a yes or no please');
}
// 3rd question
var sundayFood = prompt('Do I eat a heavy meal during lunch time?').toLowerCase();
if(sundayFood === 'yes') {
  alert('My lunch usually includes sandwitches and salad');
} else if(sundayFood === 'no') {
  alert('I will starve myself to death...');
} else{
  alert('you know the drill yes or no answers please.');
}
// 4th question
var favMeal = prompt('Do I like pizza more than I like hotdogs').toLowerCase();

if(favMeal === 'yes') {
  alert('You are right! Hotdogs do not fill me up');
} else if(favMeal === 'no') {
  alert('You are wrong! Hotdogs are not satisfying');
} else {
  alert('Please say yes or no.');
}
// 5th question
var happyMeal = prompt('If I do not have time to make food, do I rely on Mcdonalds for a meal?').toLowerCase();

if(happyMeal === 'yes') {
  alert('Hell no, maybe hashbrowns but that is it.');
} else if(happyMeal === 'no') {
  alert('You are right! I do not really like McDonalds');
} else {
  alert('please answer with yes or no');
}

