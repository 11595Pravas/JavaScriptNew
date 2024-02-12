//node .devcontainer/03.Basic/this_and_arrow.js

const user={
    username: "pravas",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username},welcome to website`);
        console.log(this);
    }

}

 //user.welcomeMessage()
// user.username="aish"
// user.price=9999
// user.welcomeMessage()

//console.log(this);

// function chai() {
//     let username="prayish"
//     console.log(this.username);
// }

// chai()

// const chai=function(){
//     let username="prayish"
//      console.log(this.username);

// }


const chai=()=>{    //arrow function
        let username="prayish"
         console.log(this.username);
    
     }

chai()

// const addTwo = (n1 , n2) =>{
//     return n1+n2
// }
// console.log(addTwo(7,8));

// const addtwo = (n1,n2)=>n1+n2

// console.log(addtwo(3,4));



// note:-

//Why we use this keyword in function in JavaScript?
//“This” keyword refers to an object that is executing the current piece of code. It references the object that is executing the current function. If the function being referenced is a regular function, “this” references the global object.
