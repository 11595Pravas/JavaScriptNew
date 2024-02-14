//node .devcontainer/itetration/arrayloop.js
//[" "," "," "," "]
// [{},{},{},{}]

//array

// let arr=[1,2,3,4,45]
// for (const i of arr) {
//     console.log(i);
// }

//string

// const greet="pravas mohanty"
// for (const i of greet) {
//     console.log(i);
// }

//map
const map =new Map()

map.set('in',"india")
map.set('usa',"united states of america")
map.set('fr',"france")

//console.log(map);

// for (const key of map) {
//    console.log(key); 
// }

// for (const [key,value] of map) {
//     console.log(key,':-',value);
// }

//object is not iterable by forof loop

// const myobj={
//     js: 'javascript',
//     cpp: 'c++',
//     rb: 'ruby'
// }

// for (const key in myobj) {
//    console.log(`${key} is ${myobj[key]}`);
// }

// we can be use forin loop for array
// let arr=[1,2,3,4,45]
// for (const i in arr) {
//     console.log(arr[i]);
// }


//forEach

// const coding=[1,2,3,4,5,6]
// coding.forEach(element => {
//     console.log(element);
// });

const array=[
    {
        cricketer: "sachin",
        position:"opner"

    },{
        cricketer:"nayar",
        position:"firstdown"
    },{
        cricketer:"deepak",
        position:"secondown"
    },{
        cricketer:"rahul",
        position:"thirdown"
    }]

    array.forEach((key)=>{
        console.log(`${key.cricketer} : ${key.position}`);
        console.log(typeof key.cricketer);
    })