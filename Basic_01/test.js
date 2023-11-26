
// E-02
// run code on vs code not in console
// console.log("Sumit");


// E-03
// Github account directly connected to vs code
// go to github repo codespace 
// then go online code editer vs code and than go to view -> command pallet (Ctrl+shift+P) -> go to container-> go to create envirment-> find node & javscript

// E-04
// const password = 1234567;   
// let EmailID = "Sumitslawand@gmail.com"
// var Score = "120"
// acountCity = "Pune"

// // password = 0849
// console.log(password)
// // password = 0849423;
// EmailID = "Sumit@gmail.com";
// var Score = "1000";
// acountCity = "Satara"

// console.table([password, EmailID, Score, acountCity])

// in given example const value is never been change 
// but let and var value is change
// NOTE
// TO declear all values in in bulk use console.table()

// E-05
// Data type in JS
// there are 7 primative data types in javascript
// 1.Symbol
// 2.String
// 3.Bolain
// 4.Null
// 5.undefine
// 6.Bigint
// 7.Number

// console.log(typeof"Sumit")
// console.log(typeof 18)
// console.log(typeof true)
// console.log(typeof null)
// console.log(A)
//  var A = "";



// E-06
// CONVARTING STRING INTO NUMBER OR CONVARTTING DATA TYPE 

// let Score = 3000;

// let newscore = Number(Score);
// console.log(typeof newscore);

// let sumit = 0;
// let newsumit = Boolean(sumit)
// console.log(newsumit)

// ++++++++++++++++++++++++++++++OPREATIONS++++++++++++++++++++++++++++++++++

// E-07
// let sum1 = "Sumit";
// let sum2 = " lawand";

// console.log(sum1 + sum2);


// console.log(1 + "2")

// let games = 1000;
// console.log(++games)

// console.log("2" === 2)

// E-010

// let name = "Sumit";
// let age = 30;

// console.log(`my Name is ${name} and my age is ${age}`)
// console.log(name.length)
// console.log(name.toUpperCase())
// console.log(name.charAt(2))
// console.log(name.indexOf('m'));


//// EP-14
//Date in javascript


// let myDate =  new Date()
// console.log(myDate.toString());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toDateString());
// console.log(typeof myDate);

// let createdate =new Date(2023, 0, 23)
// let createdateA =new Date(2023, 0, 23, 5, 5)
// let createdateB =new Date(2023-23-11)
// let createdateC =new Date(23-11-2023)


// console.log(createdate)
// console.log(createdateA.toLocaleDateString())
// console.log(createdateB.toLocaleDateString())
// console.log(createdateC.toDateString())


// let mytime = Date.now()
// console.log(mytime)
// console.log(createdate.getTime())


// console.log(Math.floor(Date.now()/1000))



// EP-14
// Array

// let array = [1,2,3,4,5,6,true,"Sumit"]

// console.log(array.length)
// console.log(array.push("lawand"))
// console.log(array.pop());
// console.log(array.shift());
// console.log(array.includes("Sumit"));
// console.log(array.indexOf("Sumit"));
// let newarray = array.join();

// console.log(array)
// console.log(newarray)

// console.log("A" , array)
// let newarray = array.slice(2,3);
// console.log, (newarray)
// console.log(("B" ,array)

// EP-15
// Array - 2

// let marval_hero = ["ironnman","thor","captan america"]
// let dc_heros = ["superman","batman", "flash"]

// marval_hero.push(dc_heros)
// console.log(marval_hero.push(dc_heros))
// console.log(marval_hero)

// let heros = marval_hero.concat(dc_heros)
// let allheros = [...marval_hero,...dc_heros]

// let allinone = [1,2,3,54,5,[5,5,5,][56,6,7[7,7,8,8]]]

// let sumit = (allinone.flat(Infinity))
// console.log(sumit)

// console.log(Array.isArray("sumit"))
// console.log(Array.from("Sumit"))


// let A = 100;

// let b = 200;

// let c = 300;

// let sumit = (Array.of(A,b,c))
// console.log(sumit)

// EP = 16
// Object

// singletone


// Object litterals

// const Employ = {
//     name:"Sumit",
//     "lastname":"lawand",
//     age:18,
//     email:"Sumit@gmail.com",
//     weekdays:["sunday","saturday"]


// }

// console.log(Employ.age)
// console.log(Employ["lastname"])
// Employ.age=20
// console.log(Employ)
// Object.freeze(Employ)
// Employ.age=29

// Employ.grreting=function(){
//     console.log("hello Sumit lawand")
// }
// Employ.grretingtwo=function(){
//     console.log(`My name is ${this.name}`)

// }
// console.log(Employ.grreting())
// console.log(Employ.grretingtwo())

// const value = {
//     age:18,
//     name:"sumit",
//     email:"sumit@gmail.com"
// }
// const {email} = value;
// console.log(email)

// EP = 17
// const tinderobj = {}

// tinderobj.name="Sumit";
// tinderobj.lastname="Lawand";
// tinderobj.logedin = false;


// console.log(tinderobj);

// const tinderobj = {

// fullname:{
//   firstname:  "Sumit",
// lastname:"Lawand",
// },
// logedin : false,

// }


// console.log(tinderobj.fullname);

// const obj1 = "Sumit";
// const obj2 = "Lawand";

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3)


// EP = 19

// destruchring

const course = {
    name:"Sumit",
    lastname:"Lawand",
    fees:"999"

}

// console.log(course.fees)

const {name} = course
console.log(name)















