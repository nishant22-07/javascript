// Primitive 
// 7 types : String , Number , Boolean , null , undefined ,
//  Symbol , BigInt

const score = 100 
const scoreValue = 100.3

const isLoggedIn = false ;
const outSideTemp = null ;
let userEmail;

const id = Symbol('123');
const anotherId = Symbol('123');

console.log(id == anotherId);

const BigNumber = 8774582246248229856837246823
console.log(typeof(BigNumber));// BigInt





//Reference (non Primitive) 
// Array , Objects , Functions

const heros = ["shaktiman","IronMan" , "SpiderMan" ];

let MyObj = {
    name : "Nishant",
    age : 22,
}

const myFunction = function(){
    console.log("Hello World!");
}
myFunction();

console.log(typeof myFunction);
