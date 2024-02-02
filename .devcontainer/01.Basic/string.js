const name="pravas"
const repoCount =50

//console.log(name + repoCount +"value")

//node .devcontainer/01.Basic/string.js

//console.log(`my Name is ${name.toUpperCase()} and my Repocount is ${repoCount}` ); // string interpoletion


const gameName = new String('pravas')
// console.log(gameName[0]);
// console.log(gameName.__proto__);

// console.log(gameName.toUpperCase())
// console.log(gameName.length);
// console.log(gameName.charAt(3));
// console.log(gameName.indexOf('r'));

const newString = gameName.substring(0,3)
//console.log(newString);

const anotherString= gameName.slice(-1,5)
console.log(anotherString);

const newStringOne="   pravas   "
console.log(newStringOne);
console.log(newStringOne.trim());

const url="wravas kumar mohanty"
const newurl=url.replace('w','p')
console.log(newurl);

console.log(url.includes('wravas'));

console.log(newurl.split('m'));