///////////////////////////////////////////-----FULL JAVASCRIPT----2024------//////////////////////////////////

// console.log("hello");
// let pencilPrice=10;
// let eraserPrice =5;
// console.log("total price is:" ,pencilPrice + eraserPrice,"rupees");
// let output=``//back ticks 
// let output =` the total price is: ${pencilPrice + eraserPrice}rupees.`;
// console.log(output)


//arithmetic opr
// let a =10;
// let b = 5;
// console.log(a+b);
// console.log(a-b);
// console.log(a*b);
// console.log(a/b);
// console.log(a%b);
// console.log(a**b);

// let colour = "GREEN";
// if (colour =="red"){
//     console.log("STOP");
// }
// if (colour== "YELLOW"){
//     console.log("GO SLOW");
// }
// if (colour=="GREEN"){
//     console.log("GO FAST");
//     console.log("HAPPY JOURNEY");
// }
// console.log("WELCOME")
// let marks = 5;
// if (marks >= 80){
//     console.log("A+")
// }
// else if  (marks >= 60){
//     console.log("A")
// }
// else if  (marks >= 40){
//     console.log("B+")
// }
// else if  (marks <= 40){
//     console.log("f")
// }
// let popSize = "XX";
// if (popSize === "XL"){
//     console.log("Price is Rs.250");
// }else if (popSize == "L"){
//     console.log("PRICE IS RS> 200")
// }else if (popSize =="M"){
//     console.log("PRICE IS RS 100")
// }else if (popSize== "M"){
//     console.log("PRICE IS RS 50")
// }else {
//     console.log("we dont have this")
// }
// let string = "apple";
// if ((string[0]==="a") && (string.length > 3) ){
//     console.log("good string")
// }
// else {
//     console.log("not good string")
// }


// let num= 12;
// if ((num%3 === 0) && ((num+1 ==15) || (num-1 ==11))){
//     console.log ("safe")
// }else{
//     console.log("nsafe")
// } 
// let colour ="red";
// switch(colour) {
//     case "red":
//         console.log("stp");
//         break;
//     case "yellow":
//         console.log("slow");
//         break;
//     case "green":
//         console.log("gooooo");
//         break;
//     default:
//         console.log("LIGHT IS BROKEN")
// }

// let  day =5
// switch(day){
//     case 1:
//         console.log("monday");
//         break;
//     case 2:
//         console.log("tuesday");
//         break;
//     case 3:
//         console.log("wedday");
//         break;
//     case 4:
//         console.log("thusday");
//         break;
//     case 5:
//         console.log("fryday");
//         break;
//     case 6:
//         console.log("satday");
//         break;
//     case 7:
//         console.log("sunday");
//         break;
// }

// alert("something is wrogn!")
// console.log("this a man")
// console.error("this is error message")
// console.warn("this is warnning message")
// prompt(" please enter your roll no: ")
// let firstName=prompt(" please enter your name : ");
// console.log(firstName);
// let firstName=prompt(" please enter your firstname : ");
// let secondtName=prompt(" please enter your secondname : ");
// console.log("welcome",firstName," ",secondtName,"!");

// let password =prompt ("set your password");
// let newpass = password.trim();
// console.log(newpass);


// let str ="Manas"
// str.indexOf("n");

// method chaining

// let msg = "      manas   "
// let newmsg = msg.trim().toUpperCase()
// console.log(newmsg);

//slice
// let str = "hello";
// console.log(str.slice(0,4));
// console.log(str.slice(-1));//length-1 (5-1= 4)

// let msge = "manas"
// msge.slice("s","i")
// console.log 

// let msg = "help!";
// let newmsg = msg.trim().toUpperCase();
// console.log(newmsg)

// let name=  "ApnaCollage";
// name.slice(4,9)
// name.indexOf("na")
// name.replace("Apna","Our")

//ARRAY
// let students = ["manas","manasi","biswajit"]
// let nums =[2,4,6,8];
// nums[0]
// nums[2]
// typeof nums //obj  array are obj

//type
// let marks =[99,98,89,78,69];
// let man =["manas","manasi","anha"];
// let info =["manas",99.9,98];
// let newArr =[];//empty array

// marks.iength()
// [].length()
// [1,2,3].length();

// let cars =["audi","suv","bmw"];
// cars.push("tyota");  //add in the last 
// cars.pop(); // delete last items
// cars.unshift("maruti") //add in first
// cars.shift() //delete from start & also return it
// cars
// start=['january','july','march','august'];
// start.shift();
// start.shift();
// start.unshift("june");
// start.unshift("july");
// start
// final =['july','june','march','august']

// let arraym =[ ['x',null,'o'], [null, 'x',null], ['o', null, 'x']];
// arraym[0][1] ='0'


// FOR LOOP
// for(let i=1; i<=50; i++){
//     console.log(i);
// }
// for (let i=5; i>=5; i--){
//     console.log (i);
// }
// print odd numb
// for (let i=1; i<=15; i=i+2){
//     console.log(i)
// }

//backward print
// for (let i=15; i>=15; i=i-2){
//     console.log(i)
// }

// print  even numb2-10
// for (let i=2; i<=10; i=i+2){
//     console.log(i)
// }

// for (let i = 5; i<=50; i=i+5){
//     console.log(i)
// }

// let n = prompt("write your number: ")
// n= parseInt(n);
// for (let i = n; i<=n*10; i=i+n){
//     console.log(i)
// }
// for (let i =1; i<=3; i++){
//     for (let j=1; j<=3;j++){
//         console.log(j);
//     }
// }
// let i =1;
// while (i<=5){
//     console.log(i)
//     i++;
// }
// let m=5;
// while(i>=1){
//     console.log(m);
//     i--;
// }
// i=0;
// while(i<=20){
//     console.log(i);
//     i++;
// }
//even num
// i=2;
// while(i<=20){
//     console.log(i);
//     i=i+2;
// }
//ODD NUM
// i=1;
// while(i<=20){
//     console.log(i);
//     i=i+2;
// }

// const favMov ="BATMAN";
// let gues = prompt("GUESS MY FAV MOVIE: ");
// while(gues != favMov){
//         if (gues =="quiet"){
//             console.log("you quiet");
//             break;
//         }
//     }
//     console.log("WROGN");
//     gues=prompt("GUESS AGAIN");
// if (gues ==favMov){
//     console.log("CONGATAS");
// }
//
// let i =1;
// while (i<=5){
//     if (i== 3){
//         break;
//     }
//     console.log(i);
//     i++
// }
//LOOPS WITH ARRAY
// let fruts = ["mango","apple","banana","litchi","orange"];
// for (let i=0; i<fruts.length;i++){
//     console.log(i,fruts[i]);
// }

// let fruts = ["mango","apple","banana","litchi","orange"];
// for (let i=1; i<fruts.length;i=i+){
//     console.log(i,fruts[i]);
// }

// let fruts = ["mango","apple","banana","litchi","orange"];
// for (let i=0; i<fruts.length;i=i+2){
//     console.log(i,fruts[i]);
// }

// let fruts = ["mango","apple","banana","litchi","orange"];
// for (let i=fruts.length-1;  i>=0; i--){
//     console.log(i,fruts.[i]);
// }

//
// let heroes = [
//     ["IRONMAN","BATAMAN","SUPERMAN"],["FALASH","HULK","KALKI"]
// ]
// for (i=0; i<=heroes.length;i++){
//     console.log(`list #${i}`);
//     for(j=0; j<heroes[i].length;j++){
//         console.log(heroes[i][j]);
//     }
// }

// let students = [['manas',99],['purbasa',89],['puam',99.9]];
// for (i=0; i<students.length;i++){
//     for (j=0;j<students[i].length;j++){
//         console.log(students[i][j]);
//     }
// }

//for of loops
// let fruts = ["mango","apple","banana","litchi","orange"];
// for (ikl of fruts){//ikl =new variale ,fruts=array name
//     console.log(ikl)
// }
// for(char of "MANASIBISWAJIT"){
//     console.log(char);
// }

// let heroes = [["IRONMAN","BATAMAN","SUPERMAN"],["FALASH","HULK","KALKI"]];
// for(hero of heroes){
//     for(zero of hero){
//         console.log(zero);
//     }
// }


// let students = {
//     name: "manas",
//     age: 21,
//     marks: 99.99
// };

// let item = {
//     price: 99.99,
//     sales: 2,
//     colour:["red","green"]
// }

// const post={
//     username:"manas",
//     content:"manas liked your post",
//     likes:"you got 10m liked on your post",
//     repost: 17,
//     tags: ["manas","shardha","harkirat"]
// };

// const post={
//     username:"manas",
//     content:"manas liked your post",
//     likes:"you got 10m liked on your post",
//     repost: 17,
//     tags: ["manas","shardha","harkirat"]
// };
// we want a particular key
//obj name ["key name"]

// post =['likes'];
// // post['tags'][0]
// //USING A DOT OPERATOR -> objname.keyname
// post.content
// post.tags[0]


// const obj = {
//     1: "a",
//     2: "b",
//     true:"c",
//     null: "d",
//     undefined: "e"//here js take every thing like true , nul and undefinied ttake a string no t like a datatypes
// };
// obj[2]// here anything  with in thid square bracket is string
// obj.true

// const students={
//     name:"manas",
//     age: 21,
//     marks:21,
//     city:"kolkata"
// };
// //obj.key = add/cahnge ( you can it update the obj)
// students.age=22;// change
// students.city="mumbai";
// students.gender ="male";// craete the new obj.
// students.marks ="A";// if anumber stored in obj but we can the toa  string ..
// students.marks = [99,98,89]// we creat a array
                                //delete objname.keyname
//deleye.stidents,marks;// delete the marks..

//OBJECT OF OBJECTS
// const clasInfo ={
//     aman: {
//         group:"a+",
//         city: "delli",
//         marks:89,
//     },
//     shaRadha : {
//         group: "a",
//         city: "pune",
//         marks: 79
//     },
//     manas: {
//         group: "O",
//         city: "kolksts",
//         marks: 99
//     }
// };
// clasInfo.aman
// clasInfo.shaRadha
// clasInfo.shaRadha.city
// clasInfo.shaRadha.city='kerala';
// clasInfo.shaRadha

//ARRAY OF OBJECTTS

// const clasInfo =[
//     {obj 1},
//     {obj 2},
//     {obj 3},
// ];

// const clasInfo =[
//     {
//         name: "aman",
//         grade: "A+",
//         city: "kochi"
//     },
//     {
//         name: "shardah",
//         grade: "A+",
//         city: "kerala"
//     },
//     {
//         name: "manas",
//         grade: "O",
//         city: "kolkata"
//     },
// ];
// clasInfo[2]
// clasInfo[1].name
// clasInfo[1].grade
// clasInfo[1].city= "mumbai";
// clasInfo[1]
// clasInfo[1].gender = "female";

// MATH OBJECT
// Math.abs(n) //12.5->12.5
// Math.pow(2,4) // basicalli 2 tothe power 4 =16
// Math.floor(n) //12.4=12,12.999=12
// Math.ceil(n)//12.3=13
// Math.random(n)//ranom value0-1 but not picking 1
//RANDOM INTEGERS
// let step1 = Math.random();
// step1

// let step1 = Math.random();
// let step2 = step1*10 //random number from 1-10
// let step3 = Math.floor(step2);//proper integer
//these line in one line
// Math.random() * 10// here we dont get 10   
// Math.floor(Math.random() * 10)
// Math.floor(Math.random() * 10)+1;
//in one line
// let random = Math.floor(Math.random() * 10) +1;
// random

// let random =Math.floor( Math.random() *100)+1
// random
// let random =Math.floor( Math.random() *100)+21;//21-25
// random


///                                          GUESS GAME

// const max = prompt("enter the max  ");
// const random =Math.floor(Math.random() * max)+1;
// let gues = prompt("Gues the number ")
// while(true){
//     if(gues== "quiet"){
//         console.log("user quiet");
//         break;
//     }

//     if(gues ==random){
//         console.log("YOU ARE RIGHT! CONGRATS rando number was",random);
//         break;
//     } else if(gues < random){
//         gues = prompt(" your guess wa too short ,please enter larger")
//     }else {
//         gues = prompt(" your guess wa too large ,please enter smaller ")
//     }
//     // else{
//     //     gues=prompt(" wrogn try again ")
//     // }
// }

// FUNCTION

// function hello() {
//     console.log("hello");
// }
// hello();


// function print1to5() {
//     for(let i=1;i<=5; i++){
//         console.log(i)
//     }
// }
// print1to5();


// function isAdult() {
//     let age = 19;
//     if (age>=18){
//         console.log("adult");
//     }else{
//         console.log("you are not adult");
//     }
// }
// isAdult();


//VVI-//CREATE A FUNCTION TO ROLL A DICE & ALWAYS DISPLAY THE VALUE OF THE DICE (1-6)

// function rollDise(){
//     let rand = Math.floor(Math.random() *6)+1;
//     console.log(rand);
// }
// rollDise();



// function printInfo(name,age) {
//     console.log(`${name}'s age is ${age}`);
// }
// printInfo("manas",21);
// printInfo("rajat",29);
// printInfo(29);


//CREATE A FUCTION THAT GIVES US THE AVERAGE OF 3 NUMBERS

// function averageOf(m,n,c){
//     let avg = (m+n+c)/3;
//     console.log(avg);
// }
// averageOf(5,5,5)


//CREATE A FUNCTION THAT PRINTS THE MULTIPLICATION TABLE OF A NUMBER
// function number (n){
//     for (let i=n;i<=n*10; i+=n){
//         console.log(i);
//     }
// }
// number(7);

//RETURN 
// function sum(a, b){
//     return a+b;
// }
// console.log(sum(sum1,2),3 );


// function isAdult(n){
//     if(n>=18){
//         return "ADULT";
//     }else{
//         return "not adult";
//     }
// }
// isAdult(12);


//CREATE A FUNCTION THAT RETURNS THE SUM OF NUMBERS FROM 1 TO n.
//logic
// let sum = 0;
// for (let i=0; i<=n;i++){
//     sum=sum+i;//sum+=i
// }
// return sum;
//

// function getSum (n){
//     let sum =0;
//     for(let i=1; i<=n; i++){
//         sum+=1;
//     }
//     return getSum;
// }


//CREATE A FUNCTION THAT ETURNS THE CONCATENATION OF ALL STRING IN AN ARRAY.
// let str =["hii","hello","!"];

// function concat(str) {
//     let result ="";
//     for(let i=0; i<str.length; i++){
//         result +=str[i];
//     }
//     return result;
// }


//SCOPE

// let sum =54; //GLOBAL SCOPE (we can use any whers of my code)
// function calSum(a,b){
//     let sum =a+b; // Function scope( WE ACN USE IT INSIDE MY FUNCTION )
//     console.log(sum);
// }
// calSum(1,2);
//BLOCK SCOPE
// {
//     let a =89;//we cannot use this variable out side the baracket
// }
// console.log(a);// throgh a error

//LEXICAL SCOPE
// function outerFunc(){
//     let x=5;
//     let y=8;
//     function innerfunc(){
//         console.log(x);
//     }
//     innerfunc( )
// }
//HOISTING

//FUNCTION EXPRESSION
// const sum =function(a,b) {//name less function
//     return a+b;
// }
// sum(2,5);

// let name ="mans";
// let sum = function(a,b) {
//     return a+b;
// }
// sum(1,2);


//HIGHORDER FUNCTION

// function multiGreet(func,count){//higherorder func
//     for (let i=1; i<=count; i++){
//         func();
//     }
// }

// let greet =function() {
//     console.log("hello");
// }

// multiGreet(greet,10);// hello print 10 type
// //TAKE A FUNCTION ASA ARGUMENT USE IT UNDER..



// function oddevenTest(request){ //FACTORYFUNCTION(CREATE NEW FUNCTION)
//     if(request == "odd") {
//         return function(n) {
//             console.log(!(n%2 ==0));
//         }
//     }else if(request == "even"){
//         return function(n) {
//             console.log(n%2 ==0);
//         }
//     }else {
//         console.log("wrogn request");
//     }
// }


//METHODS
//ACTION TAHAT CAN BE PERFORMED ON AN OBJECT
// const calculator = {
//     add: function(a,b) {
//         return a+b;
//     },
//     sub: function(a,b) {
//         return a-b;
//     },
//     mul: function(a,b){
//         return a*b;
//     }
// };



// METHODS (SHORTCUT)
// const calculator ={
//     add(a, b) {
//         return a+b;
//     },
//     sub(a,b) {
//         return a-b;
//     }
// };

//try and catch
// try {
//     console.log(a);
// }catch{
//     console.log("a is not define");
// }


//ARROW FUNCTION
// const func =(arg1,arg2) =>{function defination}

// const sum =(a, b) =>{
//     console.log(a+b);
// };
// sum(2,3);

// const pow =(a, b) =>{
//     return a**b;
// }
// pow(2,4)

// const hello = () =>{
//     console.hello("helloo");
// };

//implicit return
// const func =(a, b) =>(
//     a*b//automatc return
// );//here we use perenthisis() only
// //
// const cube = (n) => n*n*n;


// //SET TIMEOUT
// setTimeout(() => {},func,4000)


// console.log("oh hello");
// setTimeout(() => {
//     console.log("manas")
// }, 4000)

// console.log("oh hello");

//SRT INTERVAL
// setInterval( function, timeout )/timeout,interval, milisecond



// setInterval(() => {
//     console.log("manas")
// }, 2000)

// let id = setInterval(() => {
//     console.log("manas")
// }, 2000)
// console.log(id);
//tostop it
//clearinterval(id);


//THIS WITH ARROW FUNCTIONS

// const student ={
//     name: "aman",
//     marks: 95,
//     prop: this, //global scope
// };
// const a=5;


// const student ={
//     name: "aman",
//     marks: 95,
//     prop: this, //global scope
//     getName: function (){
//         console.log(this);
//         return this.name;
//     },
//     getMarks:() =>{
//         console.log(this);//parent's scope
//         return this,marks;
//     }
// };
// // const a=5;
// student.getName()

//WRITE A AN ARROW FUNCTION THAT RETURNS THE SQUARE OF ANUMBER"N".

// const square =(n) => n*n;

// console.log(square(4));

//WRITE A FUNCTION THAT PRINTS"HELLO WORLD" 5 TIMES AT INTERVALS OF 2S EACH
// let id = setInterval(() => {
//     console.log("Hello World");
// }, 2000);
// setTimeout(() => {
//     clearInterval(id);
//     console.log("ran");
// },1000);


//ARRAY METHODS
// let arr =[1,2,3,4,5];

// arr.forEach((el) => {
//     console.log(el);
// });
//or
// arr.forEach(function(el) {
//     console.log(el)
// });
//or
// let print = function(el){
//     console.log(el);
// };
// arr.forEach(print)
    
//REDUCE METHOD
// let nums= [1,2,3,4];
// let final = nums.reduce((res,el) => res+el(res+el));
// console.log(final)
// //explainaton
    // [1,2,3,4]
    // final = nums.reduce((res,el) => res+el(res+el));
    // (0//,it starts from 0,1)=>0+1=1
    // (1,2)1+2 =3
    // (3+3)=6
    // (6+4)=4

    //FINDING MAXIMUM IN ARRAY USING REDUCE
// let arr = [1,4,6,7,3,8,9,6,4,2,6,8];
// let max= arr.reduce((max,el) =>{
//     if(max <el) {
//         return el;
//     }else{
//         return max;
//     }
// });
// console.log(max);

//CHECK IF ALL NUMBERS IN ARRAY ARE MULTIPLIES OF 10 OR NOT
// let nums =[10,20,30,54];
// let ans = nums.every((el) => el% 10 ==0);
// console.log(ans);//False

// CREATE A FUNCTION TO FIND THE MIN NUMBER IN AN ARRAY

// let nums =[1,3,5,6,5];
// let min =nums.reduce((min, el) => {
//     if(min<el){
//         return min;
//     }else {
//         return el;
//     }
// });
// console.log(min);

//SPREAD
// let arr =[1,3,5,6,6];
// let neArr = [...arr];
// console.log(neArr);

// const data =  {
//     email :"ngyft@gmail.com",
//     pass:"vft",
// };
// const datacopy= {...data, id: 123,cont:"ind"};

// const student ={
//     name:"manas",
//     age:23,
//     company:"Microsoft",
//     location:"USA",
//     password:"Mn19"
// };
// let {name:nm, password:sectret}= student;
// nm();
// sectret(); 


//QUERY SELECTOR
// document.querySelector("h1");
// console.dir(document.querySelector("#description"));
// console.dir(document.querySelector(".oldimage"));
// console.dir(document.querySelector("div a"));
// console.dir(document.querySelectorAll("div a"));


// Object.getAttribute(Attr)
// Object.setAttribute(Attr)



//1)a<p> with red text that says "hey i'm red!"
//css
// .red{
//     color= red;
// }
//
// let para1 =document.createElement('p');
// para1.innerText ="hey i am re!";
// document.querySelector("body").append(para1);
// para1.classList.add('red');

// //2) an <h3> with blue text that shows "i am ablueh3"
// //css
// //.blue{
// //     color: Blue;
// // }
// // let h3 =document.createElement('h3');
// // h3.innerText ="hey i am blue!";
// // document.querySelector("body").append(h3);
// // para1.classList.add('blue');
// //

// //3)
// let div = document.createElement("div");
// let h1 =document.createElement("h1");
// let para2 =document.createElement("p");
// h1.innerText="i am a div";
// para2.innerText ="me too";
// div.append(h1);
// div.append(para2);
//div.classList.add("box");
// document.querySelector("body").append(div);

//DOM
// document.getElementById(mainImage);//it treat like variable
// document.getElementById("mainImage");//" "it is an obj
// document.getElementsByClassName("oldimage")[0];//html collection return her index is obj
// document.getElementsByTagName("p");//
//QUERY SELECTORS
// document.querySelector('p')//tag name
// document.querySelector('#myId')
// document.querySelector('.myClass')//class
// // console.dir(document.querySelector("div a"));
// console.dir(document.querySelectorAll("div a"));
//MANUPULATING
//.innerText;   (SHOW THE VISUAL TEXT  )
//.innerHTML;  (FULL TEXT MARKUP)
//.innerContent;  ( FULL HTML  MARKUP )
// img.setAttribute('src');
// Object.classList
// let img = document.querySelector('img');
// img.classList;
// classList.add("abc");
// classList.remove('green');
// classList.setAttribute('class','green')//to a single class value\
// classList.toggle()// add or remove yes->no, no-. yes

//NAVIGATION
// let box = document.querySelector('.box');
// box.children;
// // box.childElementCount;
// ul.children;
// ul.children[2].previousElementSibling;
// ul.children[1].previousElementSibling;
// ul.children[1].nextElementSibling;


// let newp =document.createElement('p');
// let body = document.querySelector('bodt');
// body.appendChild(newp);
// let  box =document.querySelector('.box');
// box.appendChild(newp);

// newp.append("this is new next");
// prepend//add lement in first
// box.prepend(newp);
// box.insertAdjacentElement('beforebegin','newp');
// box.insertAdjacentElement('afterebegin','newp');
// box.insertAdjacentElement('beforeend','newp');
// box.insertAdjacentElement('aftereend','newp');

// let body = document.querySelector('body');
// body.removeChild(btn);
// btn.remove();

// let btn= document.querySelector("button");
// console.dir('button');
// btn.onclick = function(){
//     console.log("button was clicked");
//     alert("button was clicked")
// }
//onclick
// function say() {
//     alert("hello");
// }
// btn.onclick = say();
// //onmouseenter

// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     btn.onclick =sayHello;
//     btn.onmouseenter =function (){
//         console.log("you enter a mise");
//     }
//     console.dir(btn);
// }
// function sayHello(){
//     alert("HELLO");
// }

////EVENTLISTENER
// let btns = document.querySelectorAll("button");

// for (btn of btns) {
//     // btn.onclick =sayHello;
//     btn.addEventListener("click",sayHello);
//     btn.addEventListener("click",sayName);

//     console.dir(btn);
// }
// function sayHello(){
//     alert("HELLO");
// }
// function sayName(){
//     alert("HELLO manas");
// }


//THIS IN EVENT LISTENER
//WHEN 'this' IS USED IN A CALLBACK OF EVENT HANDLER OF SOMETHING, IT REFEERS TO THAT SOMETHING


//KEYBORD EVENTS
// let inp = document.querySelector("input");

// inp.addEventListener("keydown", function() {
//     console.log("key was passsed");
// });

// inp.addEventListener("keyup", function() {
//     console.log("key was released");
// });

// inp.addEventListener("keydown", function(event) {
//     console.log(event);
//     console.log("key was passsed");
// });


//
// event.preventDefault();//to stop action


//
// let form = document.querySelector("form");

// form.addEventListener("submit". function ()(event) {
//     event.preventDefault();

//     let user = document.querySelector("#user");
//     let pass = document.querySelector("#pass");

//     console.log(user.value);
//     console.log(pass.value);
// }) 



//CALLSTACK
// function hello(){
//     console.log("hellooo");
// }
// function demo(){
//     console.log("byyyy");
//     hello();
// }
// demo(); 


// function one(){
//     return 1;
// }

// function two(){
//     return one() +one();
// }
// function three() {
//     let ans = two() +one();
//     console.log(ans);
// }
// three();

// JS IS SINGLE THREADED.
// REQUEST-->API-->RESPONSE(DATA/REJECT)-->
//CALLBACKS-
//SYNCHROUS NATURE
//CALLBACK HELL

// h1=document.querySelector("h1");
// setTimeout(() => {
//     h1.style.color="red";
// }, 1000);


// function change(color,delay,nextcolor){
//     setTimeout(() => {
//         h1.color = color;
//         nextcolor();
//     }, delay);
//     h1.style.color =color;
// }
// change("red",1000, ()=> {
//     change("white",1000);

// });

// setTimeout(change("orange"),1000);
// setTimeout(change("white"),1000);
// setTimeout(change("green"),1000);

//callback nesting -> callback hell 
//promises
//==> The Promises object represents the eventual complete(Or failure ) of an asynchronous operation and its resulting value.


//promises

// function saveDb(data,success,failure){
//     let interSpeed =Math.floor(Math.random() *10)+1;
//     if(interSpeed >4){
//         success();
//     }else {
//         failure();
//     }
    
// }
// saveDb("mgdhnoig",()=>{
//     console.log("yor dta is sved")
// }, ()=>{
//     console.log("week connection data not saved")
// });


//new
// function saveDb(data,success,failure){
//     let interSpeed =Math.floor(Math.random() *10)+1;
//     if(interSpeed >4){
//         success();
//     }else {
//         failure();
//     }
    
// }
// saveDb("mgdhnoig",()=>{
//     console.log("yor dta is sved");
//     saveDb(
//         "hallo world",// we want if first data saved than only second data savred , and here is two condition success, and failure in nw\ested from.
//         () =>{
//             console.log("succes data saved");
//             saveDb(
//                 "heello",
//                 () =>{
//                     console.log("succes3 data saved");
//                 },
//                 ()=>{
//                     console.log("data not saved")
//                 }
//             )
//         },
//         ()=>{
//             console.log("Failure data not saved");// callback hell start
//         }
//     );
// }, ()=>{
//     console.log("week connection data not saved")
// });



//PROMISES(OBJECTS)
// 1)RESOLVE(success)
// 2)REJECT(failure)
// function(asynchronous function) because it result depends on many thing 
// ex-here "saveDb"  function depends on manything like internet speed,

// function saveDb(data,success,failure){
//     let interSpeed =Math.floor(Math.random() *10)+1;
//     if(interSpeed >4){
//         success();
//     }else {
//         failure();
//     }
    
// }
// saveDb("mgdhnoig",()=>{
//     console.log("yor dta is sved");
//     saveDb(
//         "hallo world",// we want if first data saved than only second data savred , and here is two condition success, and failure in nw\ested from.
//         () =>{
//             console.log("succes data saved");
//             saveDb(
//                 "heello",
//                 () =>{
//                     console.log("succes3 data saved");
//                 },
//                 ()=>{
//                     console.log("data not saved")
//                 }
//             )
//         },
//         ()=>{
//             console.log("Failure data not saved");// callback hell start
//         }
//     );
// }, ()=>{
//     console.log("week connection data not saved")
// });


// function saveDb(data){
//     return new Promise((resolve, reject) => {
//         if(internetSpeed>4){
//             resolve("succes data was  saved");
//         }else{
//             reject("failure week connection");
//         }
//     })
// }
// saveDb("mamaamamma");



//PROMISES
// 1.FULLFILL[IF WE WANT SOME WORK DONE  NEXT BY  FULLFILL THEN WE USE {THEN} (Promise.THEN()  )]

// 2.REJECT[IF WE WANT SOME WORK DONE  NEXT BY  REJECT THEN WE USE {catch} (Promise.catch()  )]

// function saveDb(data){
//     return new Promise((resolve, reject) => {
//         if(internetSpeed>4){
//             resolve("succes data was  saved");
//         }else{
//             reject("failure week connection");
//         }
//     })
// }
// let request =saveDb("mamaamamma");// req = promises  object
// request.then(() =>{
//     console.log("promises was resolved");
// })
// .catch(() => {
//     console.log("promises was rejected");
// })

//ANOTHER VERSION

// saveDb("mamaam")
//     .then(() =>{
//         console.log("promises was resolved");
//     })
//     .catch(() => {
//         console.log("promises was rejected");
//     });

//PROMISES CHAIING
//[ DO ROW OF PROMISES CHAIN( WHEN WE USE MANYTIME 'THEN') ]


// saveDb("mgdhnoig",()=>{
//     console.log("yor dta is sved");
//     saveDb(
//         "hallo world",
//         () =>{
//             console.log("succes data saved");
//             saveDb(
//                 "heello",
//                 () =>{
//                     console.log("succes3 data saved");
//                 },
//                 ()=>{
//                     console.log("data not saved")
//                 }
//             )
//         },
//         ()=>{
//             console.log("Failure data not saved");// callback hell start
//         }
//     );
// }, ()=>{
//     console.log("week connection data not saved")
// });

// //** */
// saveDb("mamaam")
//     .then(() =>{
//         console.log("promises was resolved");
//         return saveDb("hellooo");
//     })
//     .then(()=>{
//         console.log("data2 saved")
//     })
//     .catch(() => {
//         console.log("promises was rejected");
//     });

    //PROMOSES ARE REJECTED AND RESOLVED WITH SOME DATA(VALID RESULTS OR ERRORS)

//ASYNC FUNCTIOM--async&await keywords
// async function greet(){ //return promises
//     return hello;
// }
//function>execute>promise>state'fulfill'
//  |>error>promise>state'rejected'

// async function greet(){ //return promises
//     return hello;
// }
// greet()
//     .then((result) =>{
//         console.log("promise was resolved");
//         console.log("Result was:", result);
//     })
//     .catch((err) =>{
//         console.log("promise was rejected with err",err);
//     });
//arror functin to async
// let demo =async()=>{
//     return 5
// };


//AWAIT KEYWORD
//PAUSED THE EXECUTION OF ITS SURRONDING ASYNC FUNCTION UNTIL THE PROMISE IS SETTLED(RESOLVED OR REJECTED)

// async function show() {
//     await color("green",1000);
//     await color("red",1000);
//     await color("blue",1000);
//     await color("green",1000);
//     return "done";
// }

//ASYNC WITH PRPMISES

// h1=document.querySelector("h1");

// function change(color,delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             h1.style.color=color;
//             console.log(`color changed to${color}!`);
//             resolve("color changed");
//         },delay);
//     });
// }
// async function demo(params) {
//     await changeColor("red",1000);
//     await changeColor("green",1000);
//     changeColor("blue",1000);
// }

//NEW
//REJECTION WITH AWAIT

// h1=document.querySelector("h1");

// function change(color,delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             let n=Math.floor(Math.random()*5)+1;
//             if(n>3){
//                 reject("promise  rejected");
//             }
//             h1.style.color=color;
//             console.log(`color changed to${color}!`);
//             resolve("color changed");
//         },delay);
//     });
// }
// async function demo(params) {
//     await changeColor("red",1000);
//     await changeColor("green",1000);
//     await changeColor("blue",1000);
//     let a=56;
//     console.log(a);
//     console.log("new number =",a+3);
// }


//HANDLING REJECTION WITH AWAIT
//TRY AND CATCH
// h1=document.querySelector("h1");

// function change(color,delay){
//     return new Promise((resolve, reject) => {
//         setTimeout(() =>{
//             let n=Math.floor(Math.random()*5)+1;
//             if(n>3){
//                 reject("promise  rejected");
//             }
//             h1.style.color=color;
//             console.log(`color changed to${color}!`);
//             resolve("color changed");
//         },delay);
//     });
// }
// async function demo(params) {
//     try{
//         await changeColor("red",1000);
//         await changeColor("green",1000);
//         await changeColor("blue",1000);
//     }catch(err){
//         console.log(err);
//     }
//     let a=56;
//     console.log(a);
//     console.log("new number =",a+3);
// }





///API[APPLICATION PROGRAMMING INTERFACE]

//USER ->REQUEST  [API]->SERVER  ->RESPONSE API-> API GIVE US

// let jsonReq ='{"fact":"approximately 1/3 of cat owner think their pets are able to read their mind.",Length":78}';

// let vailRes= JSON.parse(jsonReq);
// console.log(vailRes.fact);

// //
// let student ={
//     name: "manas",
//     marks:89,
// };

// JSON.stringify(student);//json data   **'string'



// let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((res) =>{
//         console.log(res);
//         console.log(res.json());  //data readable//and return promise
//     })
//     .catch((err) =>{
//         console.log("error--",err);
//     });


// let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((res) =>{
//         console.log(res);
//         res.json().then((data) =>{
//             console.log(data);//proper json dat
//         });
//     })
//     .catch((err) =>{
//         console.log("error--",err);
//     });

// //REFACTOR THE CODE

// let url = "https://catfact.ninja/fact";
// fetch(url)
//     .then((res) =>{
//         console.log(res);
//         return res.json();
//     })
//     .then((data) =>{
//         console.log(data.fact);
//     })
//     .catch((err) =>{
//         console.log("error--",err);
//     });\


//USING FETCH WITH ASYNC /AWAIT

// let url = "https://catfact.ninja/fact";
// async function getFact() {
//     try{
//         let res = await fetch(url);
//         let data =await res.json();
//         console.log(data.fact);
//     }catch (e){
//         console.log("error",e);
//     }
// }

//Axios [LIBRARY TO MAKE HTTP REQUESTS]
//USING AXIOS


// let btn = document.querySelector("button");
// btn.addEventListener("click", async () =>{
//     // console.log("button was clicked");
//     let fact =await getFact();
//     console.log(fact);
//     let p = document.querySelector("#result");
//     p.innerText =fact;
// });

// let url = "https://catfact.ninja/fact";

// async function getFact() {
//     try{
//         let res = await axios.get(url);
//         return res.data.fact;
//     }catch (e){
//         console.log("error",e);
//         return"no fdact found";
//     }
// } 
