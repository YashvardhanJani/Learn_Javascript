/* Javascript is prototype-based language and its classes are primarily
syntactic sugar over existing prototype-based inheritance mechanisms.

# Object
- collection of properties and methods
- toLowerCase

# Parts of OOP
Object literal 
- Constructor function
- Prototypes
- Classes
- Instances (new, this)

# 4 pillars of OOP
- Abstraction
- Encapsulation
- Inheritance
- Polymorphism
*/


const user = {
    username: "yashvardhan",
    loginCount: 8,
    signedIn: true,

    getUserDetails: function(){
        //console.log("Got user details from database");
        //console.log(`Username: ${this.username}`);
        console.log(this);
    }

}

console.log(user.username)
console.log(user.getUserDetails());
console.log(this);

function User(username, loginCount, isLoggedIn){
    this.username = username;
    this.loginCount = loginCount;
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`Welcome ${this.username}`);

    }

    return this
}

const userOne = new User("yashvardhan", 12, true)
const userTwo = new User("ChaiAurCode", 11, false)
console.log(userOne.constructor);
console.log(userTwo);


// instanceof
function Car(make, model, year) {
  this.make = make;
  this.model = model;
  this.year = year;
}
const auto = new Car("Honda", "Accord", 1998);

console.log(auto instanceof Car);
// Expected output: true

console.log(auto instanceof Object);
// Expected output: true