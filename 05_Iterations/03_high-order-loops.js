const myNums = [1,2,3,4,5,6,7,8,9,10]

const newNums = myNums.filter( (num) => num>4 )   // filter

// const newNums = []
// myNums.forEach( (num) => {
//     if(num>4){
//         newNums.push(num)
//     }
// } )

console.log(newNums);

const modifiedNum = myNums.map((num) => num + 10)    // map
console.log(modifiedNum);

const doubleMap = myNums
                  .map((num)=>num*10)
                  .map((num)=>num+1)
// const doubleMap = myNums.map((num)=>num*10).map((num)=>num+1)                  
console.log(doubleMap);


// reduce

// const myTotal = myNums.reduce(function (acc, currval) {
//     return acc + currval
// }, 0)

const myTotal = myNums.reduce((acc,currval)=>(acc+currval),0)
console.log(myTotal);