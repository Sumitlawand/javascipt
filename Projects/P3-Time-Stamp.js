const clock = document.getElementById('clock')
console.log('sumit')



setInterval(()=>{
    let data = new Date();
    // console.log(data.toLocaleTimeString());
    clock.innerHTML = data.toLocaleTimeString()
},1000);

