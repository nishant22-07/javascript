# projects related to dom

## project link
[click here](https://stackblitz.com/edit/dom-project-chaiaurcode?file=index.html)

# Solution code

## Project 1

``` javascript
console.log('Nishant');

const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach(function(button){
  console.log(button);
  button.addEventListener('click',function(e){
    console.log(e)
    console.log(e.target)
    switch(e.target.id){
      case "grey":
        body.style.backgroundColor = e.target.id;
        break;
      case "white":
        body.style.backgroundColor = e.target.id;
        break;
      case "yellow":
        body.style.backgroundColor = e.target.id;
        break;
      case "blue":
        body.style.backgroundColor = e.target.id;
        break;
      case "purple":
        body.style.backgroundColor = e.target.id;
        break;
    }
    
  })
});
```
## Project 2
``` javascript
const form = document.querySelector('form');

// this usecase will give you empty
// const height = parseInt(document.querySelector('#height').value)

form.addEventListener('submit',function(e){
  e.preventDefault();

  const height = parseInt(document.querySelector('#height').value);
  const weight = parseInt(document.querySelector('#weight').value);
  const results = document.querySelector('#results');
  const status = document.querySelector('#status');

  if(height === '' || height < 0 || isNaN(height)){
    results.innerHTML = `Please Enter valid height`
  }else if (weight === '' || weight < 0 || isNaN(weight)){
    results.innerHTML = `Please Enter valid weight`
  }else{
    const bmi = (weight/((height*height)/10000)).toFixed(2)
    // show the result 
    results.innerHTML = `<span> ${bmi}</span>` 
    if(bmi < 18.6 ){
      status.innerHTML = `you are under weight`
    }else if (bmi >= 18.6 && bmi <= 24.9 ){
      status.innerHTML = `your bmi is Normal`
    }
    if(bmi > 24.9 ){
      status.innerHTML = `you are overweight `
    }
  }
})
```

## Project 3 
``` javascript

const clock = document.getElementById('clock')
// const clock =  document.querySelector('#clock');

setInterval(function(){
    let date = new Date();
    // console.log(date.toLocaleTimeString())
    clock.innerHTML = date.toLocaleTimeString();
},1000) 

```
## Project 4
``` javascript

let randomNum = parseInt((Math.random()*100+1));
// console.log(randomNum)

const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
const guessSlot = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const startOver = document.querySelector('.resultParas')

const p = document.createElement('p');

let prevGuess = [];
let numGuess = 1;

let playGame = true;

if(playGame){
  submit.addEventListener('click',function(e){
    e.preventDefault();
    const guess =parseInt(userInput.value);
    console.log(guess);
    validateGuess(guess);
  })

}

function validateGuess(guess){
  if(isNaN(guess)){
    alert('Please Enter a Valid Number')
  }else if(guess <1){
    alert('Please enter number greater than 1')
  }else if(guess > 100){
    alert('Please enter number less than 100')
  }else{
    prevGuess.push(guess);
    if(numGuess === 11 ){
      displayGuess(guess);
      displayMessage(`Game Over. Random number Was ${randomNum}`)
      endGame();
    }else{
      displayGuess(guess);
      checkGuess(guess);
    }
  }

}

function checkGuess(guess){
  if(guess === randomNum){
    displayMessage(`you guessed it right! YOU WON!`);
    endGame();
  }else if( guess > randomNum ){
    displayMessage(`try smaller number`);
  }else if( guess < randomNum ){
    displayMessage(`try bigger number`);
  }
}

function displayGuess(guess){
  userInput.value = '';
  guessSlot.innerHTML +=`${guess}, `;
  numGuess++;
  remaining.innerHTML = `${11- numGuess}`
}

function displayMessage(message){
  lowOrHi.innerHTML = `<h2>${message}</h2>`
}

function newGame(){
  const newGameButton = document.querySelector('#newGame');
  newGameButton.addEventListener('click',function(e){
    randomNum = parseInt((Math.random()*100+1));
    prevGuess = [];
    numGuess = 1;
    guessSlot.innerHTML = '';
    remaining.innerHTML = `${11- numGuess}`;
    userInput.removeAttribute('disabled');
    startOver.removeChild(p);
    displayMessage(``);
  })
}

function endGame(){
  userInput.value = '';
  userInput.setAttribute('disabled','')
  p.classList.add('button')
  p.innerHTML = `<h2 id = "newGame"> Start new Game </h2>`;
  startOver.appendChild(p)
  newGame();
}
```