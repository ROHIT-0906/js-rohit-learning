//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

// const score = 100
// const scoreValue = 100.3

// const isLoggedIn = false
// const outsideTemp = null
// let userEmail;

// const id = Symbol('123')
// const anotherId = Symbol('123')

// console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

// const heros = ["shaktiman", "naagraj", "doga"];
// let myObj = {
//     name: "hitesh",
//     age: 22,
// }

// const myFunction = function(){
//     console.log("Hello world");
// }

// console.log(typeof anotherId);

//++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

// stack (primitive)   Heap(non-primitive)

// let myName ="Rohit Makam"
// let anotherName = myName
// anotherName = "Nitin Makam"
// console.log(myName);
// console.log(anotherName);

let userOne = {
userName: "Nitin Makam",
Email: "Rohitmakam@gmail.com",
age:123
};
let userTwo = userOne
userTwo.userName = "Rohit makam"
console.log(userOne.userName);
console.log(userTwo.userName);
