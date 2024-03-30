// const tinderUser = new Object() this is a singletan object
const tinderUser = {} // this not a singletan object
tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = true
// console.log(tinderUser);
const regularUser = {
    email: "rohit@gmail.com",
    fullname:{
        Username:{
            firstName:"Rohit",
            lastName:"Makam"
            
        }

    }
}
// console.log(regularUser.fullname.Username); // nested Objects

const obj1 = {1:"a",2:"b"}
const obj2 = {3:"a",4:"b"}
const obj3 = {4:"c",5:"d"}
// const obj3 = Object.assign({},obj1,obj2)
const obj4 = {...obj1,...obj2,...obj3}
// console.log(obj4);
// console.log(Object.keys(tinderUser));
// console.log(Object.values(tinderUser));
// console.log(Object.entries(tinderUser));
// console.log(tinderUser.hasOwnProperty("isLoggedIn"));
const course ={
    courseName:"JS in Hindi",
    coursePrice:999,
    Instructor:"Rohit"
}
const {Instructor: courseInstructor} = course
// console.log(Instructor);
console.log(courseInstructor);


