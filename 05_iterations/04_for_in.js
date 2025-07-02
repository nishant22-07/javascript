const myObjects = {
    js : "Javascript",
    cpp : "C++",
    rb : "Ruby",
    swift : "swift by apple"
}

// for (const [key, values] of Object.entries(myObjects)) {
//    console.log(`myObjects have key ${key} and its values is ${values}`);
   
// }

// for (const key in myObjects) {
//     console.log(key, ':' ,myObjects[key]);
       
// }

for (const key in myObjects) {
    // console.log(`(${key}) is shortcut for ${myObjects[key]}`);
    
}

const programming_languages = ["py", "cpp", "java", "rb" ];
for (const key in programming_languages) {
    // console.log(programming_languages[key]);
    
}


// maps 

const map  = new Map();

// map.set('IN', "India")
// map.set('USA', "United States Of America")
// map.set('UK', "United Kingdom")

// for (const key in map) {
//     console.log(key);
    
// }