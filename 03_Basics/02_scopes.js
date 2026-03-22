console.log(addOne(5))

function addOne(num){
    return num + 1
}

// console.log(addTwo(5))          // ERROR

const addTwo = function(num){
    return num + 2
}

/* In browsers, the global object is window, which includes DOM APIs,
while in Node.js the global object is global, and each file is treated
as a module, so variables are not attached to the global scope automatically. */