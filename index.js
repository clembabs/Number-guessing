var guessNo=0;
var max=2;
var min=1;
var stage = 1;

function guess(max, min, username) {
  var randNo = Math.floor(Math.random() * (max - min) + min);

  var userGuess = Number(prompt('Enter your guessed number: '));
  

  if(userGuess === undefined || NaN) {
    alert('Enter a valid no');
  } else {
    if(userGuess === randNo) {
    alert(username + ', Yay,Correct!!!');
      alert('Your point is', ++guessNo);
      alert('You have moved to stage: ', ++stage);
      alert('----------------------')
      ++max;
    guess(max,min,username);
  } else {
    alert(username + ', you missed it');
  }
  }
}

function numberGuessing() {
  alert('Welcome to number Guessing game');
 var username = prompt("Enter your username: "); 
  guess(max,min, username);
}


numberGuessing();

