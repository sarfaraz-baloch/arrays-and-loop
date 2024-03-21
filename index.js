//  question 1

let arrays = [[], [], [], []];
// console.log(arrays);

// 2 Question

let multiarrays = [
  [0, 1, 2, 3],
  [1, 0, 1, 2],
  [2, 1, 0, 1],
];
// document.write(multiarrays)
// console.log(multiarrays)

// question 3
for (let i = 1; i <= 10; i++) {
  // console.log(i)
}

// Q 4
// let user1 = Number(prompt("enter a number to show is multiplication table"))
// let user2 = Number(prompt("enter table lenght"))

for (let i = 1; i <= 5; i++) {
  // console.log(`${user1} x ${i} = ${user1 * i}`)
  // document.write(`${user1} x ${i} = ${user1 * i} <br>`)
}

// Q = 5
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];

for (let i = 0; i < fruits.length; i++) {
  // document.write(`Elements at index ${i} is ${fruits[i]} <br>`)
}

// Q 6

// a. Counting: 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15

// document.write(`<h1>Counting</h1>`)
// document.write(`<br>`)
// for(let i =1; i <= 15; i++){
//     document.write(`${i} `)
// }

// b. Reverse counting: 10, 9, 8, 7, 6, 5, 4, 3, 2, 1

// document.write(`<h1>Reverse Counting</h1>`)
// document.write(`<br>`)
// for(let i =10; i >= 1; i--){
//     document.write(`${i} `)
//     // console.log(i)
// }

// c. Even: 0, 2, 4, 6, 8, 10, 12, 14, 16, 18, 20

// document.write(`<h1>Even</h1>`)
// document.write(`<br>`)
// for(let i =0; i <= 20; i++){
//     if(i % 2 === 0 ){

//         // console.log(i)
//         document.write(`${i} `)
//     }
// }

// d. Odd: 1, 3, 5, 7, 9, 11, 13, 15, 17, 19

// document.write(`<h1>Odd</h1>`)
// document.write(`<br>`)
// for(let i =0; i <= 20; i++){
//     if(i % 2 === 1 ){

//         // console.log(i)
//         document.write(`${i} `)
//     }
// }

// e. Series: 2k, 4k, 6k, 8k, 10k, 12k, 14k, 16k, 18k, 20k
// document.write(`<h1>Series</h1>`)
// document.write(`<br>`)
// for(let i =2; i <= 20; i++){
//     if(i % 2 === 0 ){

//         // console.log(`${i}K`)
//         document.write(`${i}K `)
//     }
// }

// Q7.
// 7. You have an array
// A = [“cake”, “apple pie”, “cookie”, “chips”, “patties”]
// Write a program to enable “search by user input” in an
// array.
// After searching, prompt the user whether the given item is
// found in the list or not. Example:

// let user = prompt("welcome to sarfarz bakery what do you want to order?")

// let bakery = ["cake", "apple pie", "cookie", "chips", "pattites"]
// let flag = false
// for(let i = 0; i < bakery.length; i++){
//     if(user === bakery[i]){
//         flag =true
//         // console.log(bakery[i])
//         document.write(`${user} is <strong>avaiable</strong> at index ${i} in our bakery`)
//         break
//     }
// }

// if(flag === false){
//     document.write(`We are sorry ${user} is not <strong>available</strong> in our bakery`)
// }


// Q = 8

// let GreaterThan = [24, 53, 78, 91, 12];
// let result = 0;

// for (let i = 0; i < GreaterThan.length; i++) {

//     if(result < GreaterThan[i]){
//         result = GreaterThan[i]
//     }

// }

// console.log(result)


/// Q 9 

// let LessThan = [24, 53, 78, 91, 9, 12,];
// let result = 13;

// for (let i = 0; i < LessThan.length; i++) {
//     // result = mylist[i]
//     if(result > LessThan[i]){
//       result = LessThan[i]
//       // console.log(result)
//     }

//   }
//   console.log(result)


//  Q = 10
// Table of 5

for(let i = 1; i <= 20; i++){
  console.log(`5 x ${i} = ${5 * i}`)
}