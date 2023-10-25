"use strict";

// Welcome Message w/ prompt
let userName = prompt('Hey what is your name?');
console.log(userName);
alert(`Welcome ${userName}, to my work in progress 'About Me' site!`);

//Question 1 (If condition)
let userAccept = prompt('We are gonna take a quick quiz is that okay? (Y/N)');
let letter = userAccept.substring(0, 1).toLowerCase();
console.log(letter);
if (letter === 'y') {
  console.log('Strap in here we go!');
  alert('Strap in here we go!');
} else {
  // console.log('Placeholder because my while loop will not work in lighthouse');
  while (userAccept.toLowerCase() !== 'y') {
    userAccept = prompt(
      'You gotta agree to the test in order to view my site! So (Y/N)'
    );}
}

// Question 2 (Switch)
let brendanState = prompt('I am from Pennsylvania(Y/N)');
switch (brendanState.toLowerCase()) {
case 'y':
  // console.log('Nope, not from PA');
  alert('Nope, not from PA');
  break;
case 'n':
  // console.log('You are correct!');
  alert('You are correct!');
  break;
default:
  alert(
    "That's not even a choice, why would you choose that? Learn to follow directions."
  );
  break;
}

// Question 3 (If)
let brendanHome = prompt('Do I live in Fort Worth Texas currently? (Y/N)');

if (brendanHome.toLowerCase() === 'y') {
  // console.log('Ding ding ding! you're on a roll!');
  alert("Ding ding ding! you're on a roll!");
} else {
  // console.log('You are wrong!);
  alert('You are wrong!');
}

// Question 4 (Switch)
let brendanHobby = prompt('Working out in the gym is one of my hobbies? (Y/N)');

switch (brendanHobby.toLowerCase()) {
case 'y':
  // console.log('Yep love getting swole');
  alert('Yep love getting swole!');
  break;
case 'n':
  // console.log("Well that's just not quite right there partner");
  alert("Well that's just not quite right there partner");
  break;
}

// Question 5 (If)
let brendanPSM = prompt('I am a certified Professional Scrum Master 1? (Y/N)');
if (brendanPSM.toLowerCase() === 'y') {
  // console.log(`Yep you got it thanks for taking my quiz ${userName}`);
  alert(`Yep you got it thanks for taking my quiz ${userName} here's my site`);
} else {
  // console.log('You got this one wrong');
  alert('You got this one wrong');
  alert('Anyway here is my site!');
}

// Question 6 (Only four chances)
let userGuessAge = Number(prompt('How old am I?'));
let n = 1;
for(let userChance = 1; userChance < 5; userChance++){
  if(n >= 4){
    alert('The answer was 25');
    break;
  }
  console.log(n);
  if(userGuessAge === 25){
    alert(`Good Job ${userName}`);
    break;
  } else if(userGuessAge > 25){
    userGuessAge = prompt(`Nope you're too high try again, you're on your ${userChance} attempt`);
  } else if(userGuessAge < 25){
    userGuessAge = prompt(`Nope you're too low try again, you're on your ${userChance} attempt`);
  }
  n++;
}

// if (userGuessAge == 25){
//   alert('Yep you got it');
// } else if(userGuessAge == 24 || userGuessAge == 26){
//   alert('OOOO you are super close!');
//   userChance++;
//   userGuessAge = prompt("Try again")
// } else {
//   alert('Nope, not quite');
//   userChance++;
// }
// userChance++;
// howOldBrendan = prompt("Try again")
// alert("Nope!");


