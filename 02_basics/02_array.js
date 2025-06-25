const marvel_heros = ["SpiderMan","IronMan","Dr.Strange"];

const dc_heros = ["Flash","SuperMan","BatMan"];

// marvel_heros.push(dc_heros)
// console.log(marvel_heros);
// console.log(marvel_heros[3][1]);


const all_Heros = marvel_heros.concat(dc_heros)
// console.log(all_Heros);


const all_new_heros = [...marvel_heros,...dc_heros];
// console.log(all_new_heros);


const another_array = [1,2,3,4,[0,6,7,[22,7,2004,143,2]]];
const real_another_arr = another_array.flat(Infinity);
console.log(real_another_arr);


console.log(Array.isArray("Nishant"));
console.log(Array.from("Nishant"));

console.log(Array.from({name:"Nishant"})); //interesting case

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2,score3));


