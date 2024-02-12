//node .devcontainer/control_flow/truthy.js

// const userdtls=""
// if(userdtls){
//     console.log("i love you");
// }else{
//     console.log("i hate you");
// }


//false value
//false,0,-0,BigInt 0n,null,undefined,NaN

//truthy value
//"0",'false'," ",[],{},function(){},


// const array=[]
// if (array.length === 0) {
//     console.log("empty array");
// }

// const obj={}

// if (Object.keys(obj).length===0) {
//     console.log("empty object");
// }


//Nullish coalescing Operator (??): null undefined
// let val1;
//val1=5 ??10
// val1=null ?? 10
// val1= undefined ?? 15
// val1=null ?? 10 ?? 20

// console.log(val1);

//Ternary operator
// condition ? true : false
const iceTeaPrice =100
iceTeaPrice <=80 ? console.log("less than 80") :console.log("more than 80");;

