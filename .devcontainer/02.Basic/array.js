// Array
//node .devcontainer/02.Basic/array.js

// const myArr=[11,2,3,4,5]
// const myFrnd=["deep","chik"]

// const myArr2=new Array(1,2,3,4)
// console.log(myArr[1]);
// console.log(myFrnd[2]);

//Array method

// myArr.push(23)
// console.log(myArr);
// myArr.pop()
// console.log(myArr);

// console.log(myArr);
// myArr.unshift(9)
// console.log(myArr);
// myArr.shift()
// console.log(myArr);
// myArr.shift()
// console.log(myArr);


//console.log(myArr);
// console.log(myArr.includes(1));
// console.log(myArr.indexOf(11));

// const newArr=myArr.join()
// console.log(newArr);

//slice,splice
// console.log("A",myArr);
// const myn1=myArr.slice(1,3)

// console.log(myn1);
// console.log("B",myArr);

// const myn2=myArr.splice(1,3)
// console.log(myn2);

// console.log("c",myArr);


//push concat spread
const first=["a","b","c","d","e"]
const second=[1,2,3,4,5]

// first.push(second)
// console.log(first);
// console.log(first[5]);
// console.log(first.length);

const thirdArray=first.concat(second)
// console.log(thirdArray);
// console.log(thirdArray.length);

//spread
//const fourthArray=[...first,...second,...thirdArray]
//console.log(fourthArray);


//flat
// const a=[1,2,3,[4,5],[6,7,[8,9,["pravas","kumar"]]]]
// const b=a.flat(Infinity)
// console.log(b);

// console.log(Array.isArray("pravas"));
// console.log(Array.from("pravas"));
// console.log(Array.from({name: "pravas"}));

let score1=234
let score2=100
let score3=456

console.log(Array.of(score1,score2,score3));