// node .devcontainer/itetration/filter_map_and_reduce.js
// const mynums=[1,2,3,4,5,6,7,8,9,10]
// const newnum=mynums.filter( (num)=>num<4)
// console.log(newnum);

// const newnum=mynums.filter( (num)=>{return num<4})
// console.log(newnum);


// const newarr=[]
// mynums.forEach( (num)=>{
//     if (num<5) {
//         newarr.push(num)
//     }
// } );

// console.log(newarr);



// const books =[
// {
//  title:"book one",genere:"Non-fiction",publish:"1981",edition:"1989"
// },
// {
//     title:"book two",genere:"fiction",publish:"1971",edition:"1980"
// },
// {
//     title:"book three",genere:"science",publish:"2002",edition:"2002"
// },
// {
//     title:"book four",genere:"history",publish:"1997",edition:"1990"
// },
// {
//     title:"book five",genere:"fiction",publish:"2007",edition:"2005"
// },
// {
//     title:"book six",genere:"math",publish:"1967",edition:"1966"
// }

// ]

// //let p=books.filter( (bk)=>{return bk.genere==="Non-fiction"} )
// //console.log(p);
// let p=books.filter( (bk)=>{return bk.edition>"2000"} )
// console.log( p);


//map():--------

// const mynums=[1,2,3,4,5,6,7,8,9,10]

// const newnum=mynums.map( (num)=>num*10 )
// console.log(newnum);

//map chaining:--------

// const mynums=[1,2,3,4,5,6,7,8,9,10]

// const newnum=mynums.map( (num)=>num*10 ).map( (num)=>num+1 )
// console.log(newnum);


// reduce():-------
// const number=[1,2,3,4]
// const total=number.reduce( (acc,currval)=>{return acc+currval},9 )
// console.log(total);

// const shoppingCart=[
//     {
//         itenName:"js course",
//         price:2999
//     },
//     {
//         itenName:"py course",
//         price:999
//     },
//     {
//         itenName:"c course",
//         price:3999
//     },
//     {
//         itenName:"java course",
//         price:5999
//     },
//     {
//         itenName:"DSA course",
//         price:9999
//     }
// ]

// const totalcart=shoppingCart.reduce( (acc,item)=>acc + item.price ,0)
// console.log(totalcart);