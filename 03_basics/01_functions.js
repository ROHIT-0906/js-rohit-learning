

function sayMyName(){
console.log("R");
console.log("O");
console.log("H");
console.log("I");
console.log("T");

}
//sayMyName()   sayMyName:reference , ():exicution

// function addTwoNumbers(number1,number2){
//     console.log(number1 + number2);

// }
function addTwoNumbers(number1,number2){
    // let result= number1 +  number2;
    // return result;
      return number1 + number2;
}
const result = addTwoNumbers(3,6)
// console.log("Result: ",result);

function loginUserMessage(username = "samantha"){
    // if(username === undefined){
    //     console.log("Please enter the username");
    //     return
    // }
    return `${username} just logged in`
}
// console.log(loginUserMessage("cheyy"))

function calculateCartPrice(...num1){
    return num1
}
// console.log(calculateCartPrice(200,400,5000))

const user={
    username: "Rohit",
    price:199
}

function handleObject(anyobject){
    console.log(`username is ${anyobject.username} and price is ${anyobject.price}`);
}
// handleObject(user)

const arr =[200,300,700]

function returnSecondValue(getArray){
return getArray[1];
}
console.log(returnSecondValue(arr)); 


