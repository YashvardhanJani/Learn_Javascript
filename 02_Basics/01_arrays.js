const myArr = [0,52,3,56,89,"Jani"]
console.log(myArr);

myArr.push(6)
console.log(myArr);

myArr.unshift(7) // add at first location
console.log(myArr);

myArr.shift() // remove 1st element
myArr.pop()   // remove last element

const newArr = myArr.join() // type of newArr is String
console.log("NEW", myArr)

// slice() returns a shallow copy of a portion of an array without modifying the original array.
// const arr = [10, 20, 30, 40, 50];
// const result = arr.slice(1, 4);
// console.log(result); // [20, 30, 40]
// console.log(arr);    // [10, 20, 30, 40, 50] (unchanged)

// splice() modifies the original array by adding, removing, or replacing elements.
/* [Remove Elements]
const arr = [10, 20, 30, 40, 50];
arr.splice(1, 2);
console.log(arr); // [10, 40, 50] */
/* [Add Elements]
const arr = [10, 40, 50];
arr.splice(1, 0, 20, 30);
console.log(arr); // [10, 20, 30, 40, 50] */
/* [Replace Elements]
const arr = [10, 20, 30, 40];
arr.splice(1, 2, 99);
console.log(arr); // [10, 99, 40] */

// JS array-copy operations create shallow copies.

/* A shallow copy of an object is a copy whose properties share
the same references (point to the same underlying values) as those of
the source object from which the copy was made. */

/* A deep copy of an object is a copy whose properties do not share
the same references (point to the same underlying values) as those of
the source object from which the copy was made. */