const user = {
    username : "Nishant",
    price : 900,

    welcomeMessage : function () {
        console.log(`Hey! ${this.username}, welcome to club`);
        console.log(this);
        
    }

}

// user.welcomeMessage()
// user.username = "Anchal";
// user.welcomeMessage();

// console.log(this);





// function love() {
//     console.log(this);
// }


// const love = function () {
//     const love = "chai";
//     console.log(this.love);
// }


// +++++++++++++++++++++++++++ Arrow function  ++++++++++++++++++++++++++
const love = ()=> {
    const love = "chai";
    console.log(this);
}
// love()

// const addtwo = (num1,num2) =>{
//     return num1 + num2;
// }

// const addtwo = (num1,num2) => num1 + num2;

const addtwo = (num1,num2) =>({username : " Nishant" })
console.log(addtwo(22,27));


// const myArr = [2,3,4,5,4,3,12];

// myArr.forEach()