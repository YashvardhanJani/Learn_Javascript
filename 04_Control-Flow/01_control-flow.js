// if - else if - else

// truthy values : '0' , "false" , [] , {} , function(){}

// falsy values : false, 0, -0, BigInt 0n, "" , null, undefined, NaN

// false == '' : true
// false == 0 : true
// 0 == '' : true


// Nullish Coalescing Operator (??) : null , undefined
/* The nullish coalescing operator (??) returns the right-hand value
only when the left-hand value is null or undefined, unlike || which considers all falsy values. */

let val1
val1 = null ?? 7             // To handle error
console.log(val1);

/* === checks both value and type without type coercion,
while !== ensures values are not equal or types differ. */

console.log(null == undefined);   // true ❌
console.log(null === undefined);  // false ✅
console.log("" == 0);   // true ❌
console.log("" === 0);  // false ✅
console.log(0 == false);   // true ❌
console.log(0 === false);  // false ✅