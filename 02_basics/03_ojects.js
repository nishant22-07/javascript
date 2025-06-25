// singleton
// Object.create


// object literals

const mySym = Symbol("Key1");
console.log(mySym.description);

const JsUser = {
    name: "nishant",
    "full Name" : "Nishant Shivaji Kudale",
    [mySym]:"MyKey1" ,
    age: 18,
    location : "pune",
    email : "nishantkudale04@gmail.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Tuesday","Wednsday"]

};

// console.log(JsUser.email); //Not recomended
// console.log(JsUser["email"]); // recomended
// console.log(JsUser["full Name"]);
// console.log(JsUser[mySym]);


// change the eamil of the user
JsUser.email = "nishant@chatgpt.com";
// console.log(JsUser);

// In case if you want that anybudy can change your user datails you can freez the  user
// Object.freeze(JsUser);
JsUser.email = "nishant@microsoft.com"
// console.log(JsUser);


JsUser.greetings = function() {
    console.log("hello Js User");
}
JsUser.greetingsTwo = function() {
    console.log(`hello Js user ${this.name}`);
    
}
console.log(JsUser.greetings());
console.log(JsUser.greetingsTwo());


