//node .devcontainer/03.Basic/function.js


function sayMyName() {
    console.log("p");
    console.log("r");
    console.log("a");
    console.log("v");
    console.log("a");
    console.log("s");
    
}

//sayMyName()

// function addtwonumber(n1,n2) {
//     console.log(n1+n2);
// }

function addtwonumber(n1,n2) {
    return n1+n2
}

function addtwonumber(n1,n2) {
    let result=n1+n2

    return result
}

const a=addtwonumber(4,5)
//console.log(a);
//console.log(result);

function loginusermessage(username) {
    if(username===undefined){
        return `please enter a name`
    }
    else{
    return `${username} you are just logged in`
    }
}
const b= loginusermessage("aish")
//console.log(b);


//++++++++function with object+++++++++++++++

function calculateCartprice(...price) {
    return price
}

//console.log(calculateCartprice(200,34,567,234));

const student={
    name:"pravas",
    rollNo:123
}

function handelObject(anyobject) {
    console.log(`My name is ${anyobject.name} and my rollNo is ${anyobject.rollNo}`);
}

//handelObject(student)
// handelObject({
//     name:"aish",
//     rollNo:115
// })

//++++++++++++++++function with array+++++++++++

const myNewArray=[100,200,300,400]

function returnValue(anyArray) {
    return anyArray[2];
    
}

console.log(returnValue(myNewArray));
console.log(returnValue([100,300,500,1000]));