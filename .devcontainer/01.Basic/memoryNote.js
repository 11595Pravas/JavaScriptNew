/*
Memory:=
1.Stack (primitive)
2.Heap(Non-primitive(reference))

*/

let myName="pravas Mohanty"
let myAnotherName=myName
myAnotherName="Pravas Kumar Mohanty"

console.log(myName);
console.log(myAnotherName);

let userOne={
    email:"userone@gmail.com",
    upiId:"1234@paytm"
}

let userTwo=userOne
userTwo.email="usertwo@gmail.com"

console.log(userOne.email);
console.log(userTwo.email);




