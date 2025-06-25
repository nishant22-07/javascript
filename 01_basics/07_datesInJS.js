// Dates

let myDate = new Date();
// console.log(myDate.toDateString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
// console.log(myDate.toLocaleString());
// console.log(myDate.toString());
// console.log(myDate.toTimeString());
// console.log(myDate.toUTCString());
// console.log(typeof(myDate));

// let myCreatedDate = new Date(2004,6,22);
// let myCreatedDate = new Date(2004, 6, 22, 8, 8);
// let myCreatedDate = new Date("2004-7-22");
let myCreatedDate = new Date("7-22-2004");
// console.log(myCreatedDate.toLocaleString("en-IN"));

let myTimeStamp = Date.now();
// console.log(myTimeStamp);
// console.log(myCreatedDate.getTime());
// console.log(Math.floor(Date.now()/1000));

let newDate = new Date();
// console.log(newDate);
// console.log(newDate.getDay());
// console.log(newDate.getDate());
// console.log(newDate.getMonth()+1)
// console.log(`today's date  = ${newDate.getDate()}/${newDate.getMonth()}/${newDate.getFullYear()}`);


console.log(newDate.toLocaleString("default",{
    weekday: "long",
    day :"numeric",
    year : "numeric"
}));















