//node .devcontainer/02.Basic/object.js

//singleton
//object.create

//const tinderUser1= new Object() //singleton
const tinderUser2= {}//non-singeleton

tinderUser2.name="chintu"
tinderUser2.age=24
tinderUser2.id="2222lk"



//console.log(tinderUser2);
// const regularUser={
//     email:"pravas@gmail.com",
//     fullname:{
//         userfullname:{
//             firstname:"pravas",
//             lastname:"mohanty"
//         }
//     }
// }

// console.log(regularUser);
// console.log(regularUser.fullname.userfullname.lastname);

// const obj1={1:"a",2:"b"}
// const obj2={3:"c",4:"d"}
// const obj3={5:"e",6:"f"}

//const obj4=Object.assign({},obj1,obj2,obj3)
// const obj4={...obj1,...obj2,...obj3}
// console.log(obj4);

const user=[
    {
        name:"pravas",
        age:56
    },
    {
        name:"ajay",
        age:45
    },
    {
        name:"jagan",
        age:78
    }

]

//console.log( user[1].name);

// console.log(tinderUser2);
// console.log(Object.keys(tinderUser2));
// console.log(Object.values(tinderUser2));
// console.log(Object.entries(tinderUser2));

// console.log(tinderUser2.hasOwnProperty('age'));


//object destructureing

const course={
    coursename: "js in hindi",
    courseInstructure:"pravas",
    price:899
}

//console.log(course.courseInstructure);
const {courseInstructure:a}=course
console.log(a);





//+++++++++++++++++++++++++++++++++++++++++++++++++++++

//object literals
// const mysym=Symbol("key1")

// const jsUser={
//     name: "pravas",
//     [mysym]:"mykey1",
//     age:23,
//     location:"balasore",
//     email: "pravas4@gmail.com",
//     isLoggedIn: false,
//     lastLoginDays:["monday"]


// }

// console.log(jsUser.email);//old type
// console.log(jsUser["age"]);
// console.log(jsUser[mysym]);

// jsUser.age=34 //change the value in object
// Object.freeze(jsUser)
// jsUser.age=45
// console.log(jsUser);

// jsUser.greeting=function(){
//     console.log("hello india");
// }

// jsUser.greetingTwo=function () {
//     console.log(`hi my name is ${this.name}`);
// }

// console.log(jsUser.greeting());
// console.log(jsUser.greetingTwo());


