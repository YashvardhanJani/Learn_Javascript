const name = "Yashvardhan"
const repoCount = 400

// console.log(name + repoCount + " Repo-Count"); // bad practices

console.log(`Hello my name is ${name}, Repo-Count: ${repoCount}`) // string interpolation using `

const surname = new String("Jani")
console.log(name[0]);
console.log(surname[2]);
console.log(surname.length); // many methods are available, like this..
console.log(surname.toUpperCase()); // doesn't change original value
console.log(surname.charAt(2));

const url = "https://yashvardhan.com/my%20blogs"
console.log(url.replace('%20','-'));

const username = "yashvardhan-jani"
console.log(username.split('-'));