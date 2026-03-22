let myDate = new Date()
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleTimeString());
console.log(myDate.toISOString());
console.log(myDate.toJSON());
console.log(myDate.toUTCString());

let myCreatedDate = new Date(2025,5,1)
console.log(myCreatedDate.toDateString());

let myNewDate = new Date("07-04-2007")
console.log(myNewDate.toLocaleString());

let myTimeStamp = Date.now()
console.log(myTimeStamp);

myNewDate.toLocaleString('default', {
    weekday: "long"
})