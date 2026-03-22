/* Singleton is a creational design pattern that restricts a class
to only one instance and provides a global access point to that instance. */

// object created from literals => not singleton
// object created from constructor => singleton

// Object.create => Constructor Method


const mySym = Symbol("key1")

// object literals
const JsUser = {
    "full name": "Yashvardhan Jani",
    [mySym]: "mykey1", // symbol as a key; type: symbol
 // mySym: "mykey1", type: string
    age: 19,
    location: "Jamjodhpur",
    isLoggedIN: false,
    lastLoginDays: ["Sunday","Friday"]
}

console.log(JsUser.location);
console.log(JsUser["full name"]);
// console.log(JsUser."full name");    // Not allowed

console.log(JsUser);

// Object.freeze(JsUser)    // To lock the object

JsUser.greeting = function(){
    console.log(`Hello Js-User, ${this["full name"]}`)
}
 
JsUser.greeting()