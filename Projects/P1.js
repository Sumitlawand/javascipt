const buttons = document.querySelectorAll('.button');
const body = document.querySelector('body');



 buttons.forEach(function(button){
 button.addEventListener('click', (e)=>{
     if (e.target.id === 'blue'){
        body.style.backgroundColor = 'blue'
     }
  else if(e.target.id === 'red'){
   body.style.backgroundColor = 'red'
  }

  else if (e.target.id === 'yellow'){
    body.style.backgroundColor = 'yellow'
  }

  else if(e.target.id === 'green'){
    body.style.backgroundColor = 'green'
  }
     
   })
 });