const form = document.querySelector('form')



form.addEventListener("submit",(e)=>{
  e.preventDefault();

  const hight =  parseInt(document.querySelector('#hight').value)
  const Weight = parseInt(document.querySelector('#Weight').value)
  const result = document.querySelector('#result');

  if(hight === '' || hight < 0 || isNaN(hight)){
    result.innerHTML=`Please give a valied Hight ${hight}`
  }
  else if(Weight === '' || Weight < 0 || isNaN(Weight)){
    result.innerHTML=`Please give a valied Hight ${Weight}`
  }
  else{
    let bmi = (Weight / ((hight * hight) / 10000)).toFixed(2);
    result.innerHTML=`<span>Your BMI is ${bmi}</span>`
  }

})