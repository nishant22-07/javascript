function sayMyName() {
    console.log("N");
    console.log("I");
    console.log("S");
    console.log("H");
    console.log("A");
    console.log("N");
    console.log("T");
}

// sayMyName();


// function addTwoNum(num1, num2) {
//     console.log(num1 + num2);
// }

function addTwoNum(num1, num2) {
    // let result = num1 + num2;
    // return result;

    return num1+num2
}

const a = addTwoNum(4,9)
// console.log("result : " , a);

function userLoginMsg(username="sam"){
    if(username === undefined ){
        console.log("Please enter username");
        return
        
    }
    return `user ${username} just logged in.`
}
// console.log(userLoginMsg("Nishant"));

function calculateCartPrice(value1,value2,...num1) {  //... is rest operator
     return num1
}
// console.log(calculateCartPrice(100,200,500,2500));

const user = {
    username : "Nishant", 
    price : 199
}


function handleObject(anyObject) {
    console.log(`Username is ${anyObject.username} and price is ${anyObject.price}`);
    
}

// handleObject(user)

// handleObject({
//     username: "Aditya",
//     price : 100
// })

const array = [1,2,3,4,5];

function returnSecondValue(arr) {
    console.log(arr[1]);
}
returnSecondValue(array);