const name ="rohit";
const age = "17";
//console.log(name + age);
console.log(`My name is ${name} and my age is ${age}`);

const gameName = new String('RohitMakam')
// console.log(gameName.length);
// console.log(gameName.charAt(5));
// console.log(gameName.indexOf('t'));
console.log(gameName.toUpperCase());

const newString = gameName.substring(1,6)
console.log(newString);
const anotherString = gameName.slice(-8,5)
console.log(anotherString);
const newStringOne = '   rohit   '
console.log(newStringOne);
console.log(newStringOne.trim());

const url = "https://RohitM.com/rohit%20makam"
console.log(url.replace('%20','-'));
console.log(url.includes('RohitM'));

const newStringTwo = 'Hello world'
console.log(newStringTwo.anchor('Rohit'));
console.log(newStringTwo.bold('Rohit'));



