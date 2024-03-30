const mySym = Symbol("Key1");

const JsUser = {
    name: "Rohit",
    age: 18,
    [mySym]:"key1",
    location: "Bhiwandi",
    email: "rohitmakam09@gmail.com",
    isLoggedIn: false,
    lastLoginDays:["Monday","Saturday"]
}
// console.log(typeof JsUser[mySym]);
// JsUser.email = "rohitmakam09@chatgpt.com"
// console.log(JsUser);
// Object.freeze(JsUser) // to lock the object details
// JsUser.email = "rohitmakam09@masala.com"
JsUser.greeting = function(){
    console.log("Hello JS user");
}
console.log(JsUser.greeting());
JsUser.greetingtwo = function(){
    console.log(`Hello JS user,${this.name}`);
}
console.log(JsUser.greetingtwo());
