// for of 

const arr = [1,2,3,4,5,6,7]

for (const num of arr) {
    console.log(num);
}

const map = new Map()
map.set('IN', 'India')
map.set('Fr', 'France')
map.set('UK', 'United Kingdom')

console.log(map);

for (const [key, value] of map){
    console.log(key,":-",value);
    
}

// for of loop object of iterate nahi kar sakta.
// for in loop map pe nahi chalaya ja sakta.

// for in loop

const myObj = {
    js: "Javascript",
    py: "Python",
    cpp: "C++"
}

for (const key in myObj) {
    console.log(`${key} file format of ${myObj[key]}`)
}

for (const key in arr) {
    console.log(`${key} - ${arr[key]}`)
}

// for each loop 

arr.forEach(function (item){
    console.log(item);
})

// arr.forEach( (item) => {
//     console.log(item);
// })

// function printMe(item){
//     console.log(item)
// }
// arr.forEach(printMe)

// arr.forEach((item, index, array) => {
//     console.log(item, index, array)
// })

const myCoding = [
    {
        langName: "Javascript",
        langFileName: "js"
    },
    {
        langName: "Python",
        langFileName: "py"
    },
    {
        langName: "Java",
        langFileName: "java"
    }
]

myCoding.forEach((item)=>{
    console.log(item.langName);
})

// forEach loop koibhi value return nahi karta.