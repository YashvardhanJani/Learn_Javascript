let score = "33"
let valueInNumber = Number(score)
console.log(typeof(valueInNumber))

let rollno = undefined
let valueInNum = Number(rollno)
console.log(typeof(valueInNum))
console.log(valueInNum)

let password = null
let valInNumber = Number(password)
console.log(typeof(valInNumber))
console.log(valInNumber)

/*
"33" => 33
"33abc" => NaN
true => 1
null => 0
undefined => NaN 
*/

console.log("1" + 2); // 12
console.log(1 + "2"); // 12
console.log("1" + 2 + 2); // 122
console.log(1 + 2 + "2"); // 32
console.log("2" > 1); // true
// But ensure that the data type of both operand should be same while comparison

// This type of predictions may lead to inpredicted result

console.log("2" == 2)
console.log("2" === 2) // strictly check

console.log(+true); // 1
console.log(+""); // 0


/*
let num1, num2, num3
num1 = num2 = num3 = 500  // This is also write way.
*/