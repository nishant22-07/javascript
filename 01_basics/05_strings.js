const name = "Nishant";
const repoCount = 50;

console.log(name + repoCount +"values" ); // "Nishant50values"
console.log(`Hello my name is ${name} and my repo count is ${repoCount}`); // Template literals

const gameName = new String("COD-MW");

console.log(gameName[0]);// C
console.log(gameName.charAt(0));// C
console.log(gameName.length); // 7
console.log(gameName.toUpperCase());// COD-MW
console.log(gameName.indexOf("O")); // 1
console.log(gameName.__proto__);// String methods

const newGameName = gameName.substring(0, 3); // COD
console.log(newGameName); // COD

const anotherGameName = gameName.slice(1,5); //OD-M
console.log(`anotherGameName is ${anotherGameName} `);

const name1 = "Kudale";
console.log(name1.toUpperCase());// KUDALE
console.log(name1.toLowerCase());// kudale
console.log(name1.charAt(4));// l
console.log(name1.indexOf("u"));// 1
console.log(name1.indexOf("z"));// -1 (not found)

const newstr = "    Hello World    ";
console.log(newstr.trim()); // "Hello World" (removes whitespace from both ends)
console.log(newstr.trimStart()); // "Hello World    " (removes whitespace from the start)
console.log(newstr.trimEnd()); // "    Hello World" (removes whitespace from the end)



const url = "https://www.nishant/nishant%20kudale.com";

console.log(url.replace("%20", "-")); // "https://www.nishant/nishant-kudale.com" (replaces first occurrence)
 
console.log(url.includes("nishant")); // true (checks if the string contains "nishant")

console.log(gameName.split("-")); // ["COD", "MW"] (splits the string into an array at the hyphen)



