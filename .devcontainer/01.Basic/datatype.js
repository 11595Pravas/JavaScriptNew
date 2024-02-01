/*"use strict"; //treat all js code as newer version

//alert(3+3) //we are using nodejs,not browser so it shows error

console.log(3+3)

let name="pravas"
console.log("name");

//number => 2 to power 53
//bigint
//string=> ""
// boolean=>true/false
// null =>standalone value
// undefined=>
// symbol => unique

// object


console.log();

*/





console.log("------------------------------------------");
// Note

/*
primitive datatype 7 types:String,Number,Boolean,null,undefined,symbol,BigInt

Reference(Non primitive):Array,object,Functions


*/

//primitive
let a="pravas"
let b=34
let c=23.54
let d=true
let insideTemo=null
let outsideTemp;

const id=Symbol('123')
const anotherId=Symbol('123as')

console.log(typeof id);

console.log(id == anotherId);
console.log(id === anotherId);

const bigNumber =55555556798763456n
console.log(typeof bigNumber);
console.log(bigNumber);

//Reference(Non primitive):Array,Function
const heros=["saktiman","spiderman","superman"];
let myobj={
    name:"pravas",
    age:22,
    Home:"Balesore"
}

console.log(heros);
console.log(typeof heros);

console.log(myobj);
console.log(typeof myobj);

const myfunction = function (params) {
    console.log("hello world");
}
console.log(typeof myfunction);
// https://262.ecma-international.org/5.1/#sec-11.4.3
