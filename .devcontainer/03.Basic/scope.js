// node .devcontainer/03.Basic/scope.js
let a=100
if(true){
    let a=10
    const b=20
    var c=30
    console.log("Inner: ",a);
}

console.log("outer: ",a);
// console.log(a);
 //console.log(b);
console.log(c);