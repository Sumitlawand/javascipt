const randomnumber = parseInt(Math.random() * 100 + 1)


const submit = document.querySelector('#subt')
const userInput = document.querySelector('#guessField')
// const guessSlot = document.querySelector('guess')
const remaining = document.querySelector('lastResult')
const guessSlot = document.querySelector('guesses')
const lowOrHi = document.querySelector('lowOrHi')
const startOver = document.querySelector('resultParas')



const p = document.createElement('p')

let prevguess = [];
let numberofguess = 1;

let playgame = true;

if(playgame){
  submit.addEventListener('click', (e)=>{
  e.preventDefault();
  const input  = parseInt(userInput.value)
  vadlidateguess(input)
  
  })
}

function vadlidateguess (input){
    if(isNaN(input)){
      alert('Please enter valid number')
    }else if (input > 100){
      alert('Please enter valid number')
    }else if (input < 1){
      alert('Please enter valid number')
    }else{
      prevguess.push(input)
      if(numberofguess === 11){
        displayguess(input)
        displaymassage(`End game random number was ${randomnumber}`)
      }else{
        checkguess(input)
        displayguess(input)
      }
    }
}

function checkguess (input){
  if(input === randomnumber){
    displaymassage(`Congratulation you gusseing right number`)
  }else if(input < randomnumber){
    displaymassage(`gusseing low number`)
  }
  else if(input > randomnumber){
    displaymassage(`gusseing high number`)
  }
}


function displayguess (input){
  userInput.value = '';
  guessSlot.innerHTML += `${input}  `
  numberofguess++;
  remaining.innerHTML = `${11 - numberofguess}`

}


function displaymassage (massage){
  lowOrHi.innerHTML = `<h2>${massage}</h2>`
}

function gameend (){
   userInput.value = ''
   userInput.setAttribute('disable', '')
   p.classList('button')
   p.innerHTML = `<h2 class="Submit">Start new Game<h2>`
   startOver.appendChild(p)
   playgame = false
   gamestart()

}

function gamestart (){
 const newgame = document.querySelector('Submit')
 newgame.addEventListener('click', (e)=>{
   userInput.removeAttribute('disable')
   randomnumber = parseInt(Math.random() * 100 + 1)
   prevguess = [];
numberofguess = 1;
remaining.innerHTML = `${11 - numberofguess}`
startOver.removeChild(p)
 
   playgame = true
 })
}

