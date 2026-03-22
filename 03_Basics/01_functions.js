const { use } = require("react");

function addTwoNum(num1,num2) {
    let result = num1 + num2
    console.log("Hello");
    return result
}

const result = addTwoNum(2,5)
console.log("Result:",result)


function calculateCartPrice(num1,...num){
    return num
}

/* The rest operator (...) collects multiple elements into
a single array or object,
usually used in function parameters and destructuring. */

console.log(calculateCartPrice(200,450,786)) 

const user = {
    username : "Joe",
    price : 699
}

function handleObj(anyobj){
    console.log(`Username is ${anyobj.username} and Price: ${anyobj.price}`);
}

// handleObj(user)
handleObj({
    username: "Same",
    price: 499
}) // direct method