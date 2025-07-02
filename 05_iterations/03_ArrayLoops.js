// High order array loops  


const arr = [1,2,3,4,5]
for (const i of arr) {
    // console.log(i);
    
} 

const greetings = "hello, how are you!";
for (const char of greetings) {
    // console.log(char);
    
}


// maps 

const map  = new Map();

map.set('IN', "India")
map.set('USA', "United States Of America")
map.set('UK', "United Kingdom")
// console.log(map);

for (const [key,value]of map) {
    console.log(key, ':-',value);
}

const games = {
    game1 :'GTA',
    game2 :'Spiderman',
    game3 :'Candy Crush'
}

// for (const key of games) {
//     console.log(key);
    
// }

