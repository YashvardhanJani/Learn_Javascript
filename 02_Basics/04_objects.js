const tinderUser = new Object()  //singleton object

// const tinderUser = {}  // Non singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIN = false

const regularUser = {
    email: "some@gmail.com",
    fullname: {
        userfullname: {
            firstname: "Joe",
            lastname: "Maekwell"
        }
    }
}

// console.log(tinderUser);

console.log(regularUser.fullname.userfullname.firstname);
// console.log(regularUser.fullname?.userfullname.firstname);  // if full name not present in API responsse

const mixUser = Object.assign({},tinderUser,regularUser)
/* {} is used as the target object in Object.assign() so that
a new object is created instead of modifying the original source objects. */

// const obj3 = {...tinderUser,...regularUser}

console.log(mixUser);

// console.log(Object.keys(tinderUser));  // type: array ; also get values like this only..

console.log(Object.entries(regularUser));
// returns an array of an object's own enumerable key–value pairs.

const course = {
    coursename: "JS in Hindi",
    price: "999",
    courseInstructor: "Hitesh"
}

// Object De-structure
const {courseInstructor: instructor} = course

console.log(instructor);