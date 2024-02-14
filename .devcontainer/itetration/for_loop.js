//node .devcontainer/itetration/for_loop.js

//for loop

// for (let index = 0; index < 10; index++) {
//     const element = index;
//     console.log(element);
// }
// console.log("+++++++++++++");

 //nested for loop
// for (let i= 0; i< 10; i++) {

//     console.log(`outer loop value ${i}`);
//     for (let j= 0; j<5; j++) {
//        console.log(`inner loop value of ${j} and inner loop ${i} `);
        
//     }
    
//}

//ex of nested for loop

// for (let i = 1; i <=10; i++) {
//     console.log(`tables of ${i}`);
//     for (let j =1; j <=10; j++) {
//       // console.log(`${i} * ${j} =${i*j}`);
//         console.log(i +'*'+ j +'='+ i*j);
//     }
    
// }

// let myarray=[12,34,56,78,90,336]
// for (let index = 0; index < myarray.length; index++) {
//     const element = myarray[index];
//     console.log(element);
// }

//break and continue

for (let index = 1; index <=10; index++) {
    if (index==7) {
        console.log("detected 7");
        break;
    }
    console.log(index);
    
}

// for (let index =1; index < 20; index++) {
//     if (index==5 || index==10 || index==15) {
//         console.log("detected");
//         continue;
//     }
//     console.log(`value of index is  ${index}`);
    
// }