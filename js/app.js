'use strict';

//var userName = 'Kevin';
//console.log(userName);

var amountOfSleep = prompt('Do I get more than 6 hours of sleep if I slept at 12am? Please only answer with yes or no').toLowerCase();

if(amountOfSleep === 'yes') {
  alert('Only on Sundays');
} else if (amountOfSleep === 'no') {
  alert('Seattle construction starts 6 in the morning...');
} else {
  alert('Just answer with a yes or no please');
}

var onlyOnSundays = prompt('On a Sunday, do I have time to make breakfast?').toLocaleLowerCase();

if(onlyOnSundays === 'yes'){
  alert('I usually do make /breakfast/... around 11 o/clock');
} else if(onlyOnSundays === 'no'){
  alert('I value sleep more than I value substanance');
}
else{
  alert('just answer with a yes or no please');
}