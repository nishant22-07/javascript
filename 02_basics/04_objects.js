// const tinderUser =  new Object() // singleton

const tinderUser = {}
tinderUser.id = 1;
tinderUser.name = "some"
tinderUser.email = "some@gamil.com"
tinderUser.isLoggedIn = false

// console.log(tinderUser);

const regularUser = {
    email : "Aditya@gmail.com",
    fullname : {
        userFullName:{
            firstName :"Aditya",
            secondName : "Rajendra",
            lastName : "Markad"
        }

    }
} 
// console.log(regularUser.fullname.userFullName.firstName);


const obj1 = {1:"a",2:"b"};
const obj2 = {3:"a",4:"b"};
const obj3 = {5:"a",6:"b"};

const obj4 = {obj1,obj2,obj3}
// console.log(obj4);

// const obj = Object.assign({},obj1,obj2,obj3);

const obj = {...obj1,...obj2,...obj3}

// console.log(obj);

const user = [
    {
        id :1,
        email : "some@gamil.com"
    },
    {
        id :1,
        email : "some@gamil.com"
    },
    {
        id :1,
        email : "some@gamil.com"
    },
    {
        id :1,
        email : "some@gamil.com"
    },
    {
        id :1,
        email : "some@gamil.com"
    },
    {
        id :1,
        email : "some@gamil.com"
    },
]
user[1].email;

console.log(tinderUser);

console.log(Object.keys(tinderUser));
console.log(Object.values(tinderUser));
console.log(Object.entries(tinderUser))

console.log(tinderUser.hasOwnProperty("isLoggedIn"));
