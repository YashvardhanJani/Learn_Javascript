"use strict"; // treat all JS code as newer version

// alert(3+3) we are using nodejs , not browsers

let name = "Yashvardhan"
let age = 18
let isLoggedIn = true

// Symbol
const id = Symbol('123')
const m_id = Symbol('123')
console.log(id === m_id)   // false

const  bigNum = 58465184518851856n
console.log(typeof bigNum)

/* Data Types

number => 2 to power 53
bigint
string => ""
boolean => true/false
null => standalone value {type:object}
undefined    {type:undefined}
symbol => used for uniqueness

object
*/

// Primitive
// String, Number, Boolean, null, undefined, Symbol, BigInt

// Reference (Non-Primitive)
// Array, Objects, Functions

//Array:
const heros = ['Krushna','Ram','Balram','Lakshman','Hanuman']

//Object:
let myObj = {
    name: "Yashvardhan",
    age: 18,
}

//Function: as a variable method
const myFunction = function(){
    console.log("Hello World!");
    
}
// type of function is also function but known as object function.


// Stack [get copy of that variable/object] -> Primitive
/* Heap [get reference of that variable/object and modifications
affect original variable/object] -> Non-Primitive    */