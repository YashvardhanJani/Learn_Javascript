const user = {
    username: "Yashvardhan",
    price: 999,

    welcomeMessage: function(){
        console.log(`${this.username}, welcome to website!`)
        console.log(this); // Current Context
        
    },
}

// user.welcomeMessage()
// console.log(this)  // Current Context : {}

// function chai(){
//     let username = "Yashvardhan"
//     // console.log(this.username);   //undefined
// }


// const chai = function(){
//     let username = "Yashvardhan"
//     console.log(this.username);   // undefined
    
// }

// const chai = () => {              //arrow function
//     let username = "Yashvardhan"
//     console.log(this.username);
    
// }
// chai()

//arrow function
// const addTwo = (num1, num2) => {
//     return num1 + num2
// }

// implicit return arrow function
const addTwo = (num1, num2) => (num1 + num2)
console.log(addTwo(7,1));

const name = () => ({username: "Yashvardhan"})
console.log(name());
