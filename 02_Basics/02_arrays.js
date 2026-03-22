const ramayan = ["Ram", "Sita", "Lakshman", "Hanuman"]
const mahabharat = ["Krushna", "Karna", "Bhishma", "Arjun"]

// mahabharat.push(ramayan)
// console.log(mahabharat)

// const allheros = mahabharat.concat(ramayan)
// console.log(allheros)

const all_new_heros = [...mahabharat,...ramayan] // spread operator - Better Practice
console.log(all_new_heros);

const arr1 = [1,2,3,[4,5],5,[5,[4,7]]]
console.log(arr1.flat(2)); // write 'Infinity' to flat whole array

console.log(Array.from("Yashvardhan"));
console.log(Array.from({name: "Yashvardhan"})); //output: []
// You should define that, from which you want to create an array, key or vaule..

console.log(Array.of(ramayan,mahabharat));