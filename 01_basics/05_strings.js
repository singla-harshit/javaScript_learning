// console.log("hello"+" world")

let name = "Harshit"

console.log(`My name is ${name}.`)

const game = new String('QwEr-Ty');
// console.log(game.length)

// console.log(game[0]);
// console.log(typeof game.__proto__);
// console.log(game.toLowerCase());
// console.log(game.toUpperCase());
// console.log(`${game}`);
// console.log(`Length of the string is ${game.length}`)

console.log(game.charAt(2)); // Used to check the character at the specfic index
console.log(game.indexOf('E')) //Used to check the Index at the specfic Character

const newString = game.substring(0,4)
console.log(newString); 

const slicedString = game.slice(-6,-1)
console.log(slicedString)

const trimmedString = ("     Hello WOrld     ").trim()
console.log(trimmedString);

let website= "harshit%20singla.com";
website = website.replace('%20','-')
console.log(website)

const sentence = 'The quick brown fox jumps over the lazy dog'
const words = sentence.split(' ')
console.table(words)
console.table(typeof words)