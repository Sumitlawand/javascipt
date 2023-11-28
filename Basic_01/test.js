
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

// const course = {
//     name:"Sumit",
//     lastname:"Lawand",
//     fees:"999"

// }

// console.log(course.fees)

// const {name} = course
// console.log(name)


// EP = 20

// function saymyname(){
//     console.log("S")
//     console.log("u")
//     console.log("m")
//     console.log("i")
//     console.log("t")

// }

// saymyname();


// function sumit(){
//     let name = "Sumit"
// }

// console.log(sumit.name)


// function addnumber (num1, num2){
//     console.log(num1 + num2)
// }

// addnumber()


// function addnumber (num1, num2){
//     let sumit = (num1 + num2)
//     return sumit
// }

// const sumit = addnumber (2,3)

// console.log("result: ", sumit)


// function userlog (username){




// defulat vaule add
    // function userlog (username = 'Sumit'){

//     if(username === undefined){
// console.log("Please loged in")
// return
//     }
// if(!username){
//      console.log("Please loged in")
//     return
//        }
//     return (`${username} is just loged in`)
// }

// console.log(userlog())




// EP = 21

// function  addvalue (...add){
//   return add
// }

// console.log(addvalue(200,300,600))

// const sumitadd = {
//     name:"sumit",
//     lastname:"lawand",
//     age:24,
// }

// // console.log(sumitadd.age)

// function value (adddata){
//     console.log(`your name is ${adddata.name} your age is ${adddata.age}`)
// }


// value(sumitadd)

// const myarray = [20,35,6,77,87,8]

// console.log(myarray[0])
// function add (arr){
//  return arr[1]
// }


// console.log(add(myarray))

// EP-24

// arrow and this kyword

// const data = {
//     name:"Sumit",
//     password:"123",
//     lastname:function(){
//         console.log(`${this.name} is password id ${this.password}`)
//     }
// }

// data.lastname()
// data.name = "sagar"
// data.lastname()


// function add (num1,num2){
//     return num1 + num2

// } 


// const add = (num1, num2) => {
//    return num1 + num2
// }

// const add = (num1, num2) =>  (num1 + num2)

// const add = (num1, num2) => ({name:"Sumit"})
 

// add.name()



// EP - 24

// 

// (function sumit (){
//     console.log(`Sumit lawand`)
// })();

// (()=>{
//     console.log(`Sumit lawand`)
// })();

// ((age)=>{
//     console.log(`Sumit lawand ${age}`)
// })(24)


// sum time you get problem from global scope pollution to stop this we con use IIFE


// EP-25

// how javascript execute code

//  CALL STAK 

//  memory pahse and execution context

// if you call funtion inside function call stack call last function which come intio call stack
//   (LIFO)


    

// EP -27

// control flow

// if statement

// comparrsan oprater
// <,>,==,===,!=,<=,>=,

const iserlogedin = false;

// if(iserlogedin){
//   console.log("Exicuted")
// }else{
// console.log("Not Exicuted")
// }

// if (2 === "2"){
//   console.log("is excuted")
// }
// if(2 !== "4"){
//     console.log("Sumit lawand")
// }
//   const temp  =  50;
//   if(temp < 60){
// console.log("Sumit lawand")
//   }
// const data = "sumit"
// if ("Sumit"){
//     let price = 100
//     console.log(`my data price is ${price}`)
// }

// const balance = 540

// if(balance < 500 ){
// console.log("your balaance is less 500")
// }else if(balance < 750){
//     console.log("your balaance is less 500")

// }else if(balance < 850){
//     console.log("your balaance is less 500")

// }else if(balance < 950){
//     console.log("your balaance is less 500")

// }else{
//     console.log("your balance is grater 1200")
// }

// const userlogedin = true;
// const price = true;

// if(userlogedin && price & 2==2){
// console.log("Wellcome")
// }


// const userlogmail = false;
// const userotp = true;

// if(userlogmail || userotp){
//     console.log("user is loged in")
// }



// switch condition

// const month = "Sumit";

// switch (month){
// case "rahul":
//     console.log("rahul")
//     break;
//     case "ram":
//         console.log("ram")
//         break;
//         case "Sumit":
//             console.log("Sumit")
//             break;
//             default:
//                 console.log("default")
// }


// truthy and faulse values in js

// falsy values/
//   false, "",0,-0,null,NaN,undefined,BigInt n0


// truthy values
// true," ",'false','0','-0',[],{},function () {}


// detect object and array is true or falue

// const email = []

// if(email.length===0){
// console.log("sumit")
// }

// const data = {}

// if(Object.keys(data).length===0){
//     console.log("Sumit lawand")

// }

// turneru oprater

// const icecremprice = 100;


// condition                     true                        false
// icecremprice >= 80 ? console.log("Sumit") : console.log("sanjiwani")




// EP - 27

// for

// for (i = 0; i <= 10; i++){
//     const element = i;
//     if( i == 5){
//       console.log(i)
//     }
//     console.log(element)

// }


// for (i=0; i <= 10; i++){
//     console.log(i)
//     for(j=0; j<=10; j++){
//      console.log(j)
//     }
// }

// let myarray = ["Sumit", "Rahul" , "Raj","Sagar"]

// for(index=0;index < myarray.length; index++){
//    const element = myarray[index]
//    console.log(element)
// }


// for (i=1; i<20;i++){
//     if(i==5)
//   { console.log("5 id Detected");
//   break}
//    console.log(i)
// }

// for (i=1; i<20;i++){
//     if(i==5)
//   {
//      console.log("5 id Detected");
//   continue
// }
//    console.log(i)
// }


// EP - 28

// Do While loop

let i = 0 
while (i <= 10){
  console.log(i);
  i = i + 1
}


let  array =  ["Sumit", "Rahul" , "Raj","Sagar"]

i = 0;
while(i < array.length){
  console.log(array)
  array = array +
}