console.log("hi i am nishant");
console.log("welcome to my page");
console.log("i am a developer");   

let fullName="Nishant Kumar";
let FULLNAME = "NISHANT KUMAR";
let age = 20 ;
console.log(fullName);
console.log(FULLNAME);
console.log(age); 
console.log(typeof fullName);
console.log(typeof FULLNAME);
console.log(typeof age);


let x= null;
console.log(x);
console.log(typeof x);


let y =  undefined;
console.log(y);
console.log(typeof y);


let isFollow = true;
console.log(isFollow);
console.log(typeof isFollow);

let n = BigInt("123");
console.log(n);
console.log(typeof n);



let z = Symbol("nishant");
console.log(z);
console.log(typeof z);

//object
const student = {
    name : "Nishant",
    age : 20,
    isPassed : true,
    marks : {
        maths : 80,
        science : 90
    },
};
student.age= student.age+1;
console.log(student.age)
console.log(student);
console.log(typeof student);
console.log(student.marks.maths);


