const userName = [];

// if (userName) {
//     console.log("got the username");
// }else{
//     console.log("didn't get the username");
    
// }

// falsy values
// false , 0 , -0 , BigInt 0n, "" , null , undefined, NaN


// truthy values
// "0", 'false', " ", [], {}, function(){}

// if (userName.length === 0) {
//     console.log("Array is empty");
// }
    
const emptyObject = {};

// if (Object.keys(emptyObject).length === 0 ) {
//     console.log("Object is empty"); 
// }





// **********Nullish Coalescing Operator (??) : null undefined **********

let val1;
// val1 = 5 ?? 10;
// val1 = null ?? 5;

// val1 = undefined ?? 10 ;
val1 = undefined ?? 5 ?? 11;
console.log(val1);


// ************************* Ternery Operator ***********************


const StarBucksCoffee = 700;
StarBucksCoffee >= 200 ? console.log("very expensive, out of aukat") : console.log("not expensive , In budget ");

