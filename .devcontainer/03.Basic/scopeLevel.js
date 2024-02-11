// node .devcontainer/03.Basic/scopeLevel.js

function one() {
    const name="pravas"
    function two() {
        const website="youtube"
        console.log(name);
    }
    //console.log(website);
    two()
}

//one()

if(true){
    const username="pravas"
    if(username==="pravas"){
        const website="youtube"
        //console.log(username);
    }
   // console.log(website);
}
//console.log(username);


//++++++++++++++++++ intersting +++++++++++++++++
console.log(addone(5))
function addone(num) {
    return num+1
}

// addtwo(4)
const addtwo=function(num){
    return num+1
}
// const n=addtwo(4)
// console.log(n);
//console.log(addtwo(4));