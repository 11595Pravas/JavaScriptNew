//node .devcontainer/01.Basic/date.js

let myDate=new Date()
//console.log(typeof myDate);

// console.log(myDate.toDateString());
// console.log(myDate.toISOString());
// console.log(myDate.toJSON());
// console.log(myDate.toLocaleDateString());
 console.log(myDate.toLocaleString());
// console.log(myDate.toString());

let myCreateDate=new Date(2024,1,24,5,4)
//console.log(myCreateDate.toLocaleString());

let myTimeStamp= Date.now()
console.log(myTimeStamp);
console.log(myCreateDate.getTime());
console.log(Math.floor(Date.now()/1000));


let newDate=new Date();
console.log(newDate.toLocaleString('default',{
    weekday:"narrow"
}));