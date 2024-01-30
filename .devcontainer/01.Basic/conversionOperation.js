let score="123as"
let a= null
let c=undefined
let e=false
let g=1

//NaN =>not a number

console.log(score);
console.log(typeof score);
 let updatescore=Number(score)
 console.log(updatescore)
 console.log(typeof updatescore);
console.log(typeof(updatescore));


console.log("-----------------------------------")


console.log(a);
console.log(typeof(a));
let b=Number(a)
console.log(b);
console.log(typeof b);


console.log("-----------------------------------")


console.log(c);
console.log(typeof(c));
let d=Number(c)
console.log(d);
console.log(typeof d);


// node .devcontainer/01.Basic/conversionOperation.js


console.log("-----------------------------------")


console.log(e);
console.log(typeof(e));
let f=String(e)
console.log(f);
console.log(typeof f);

console.log("-----------------------------------")


console.log(g);
console.log(typeof(g));
let h=Boolean(g)
console.log(h);
console.log(typeof h);

//1 =>true ; 0=>false
//"" => false
//"pravas" => true