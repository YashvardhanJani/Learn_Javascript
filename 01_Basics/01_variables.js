const accountId = 144553
let accountEmail = "yashvardhan@gmail.com"
var accountPassword = "12345"
accountCity = "Jaipur" // This is also posiible but prefer not to use.
let accountState;

// accountId = 2    // Not allowed
accountEmail = "ypj@gmail.com"
accountPassword = "45678"
accountCity = "Gandhinagar"

console.log(accountId);
console.table([accountId, accountEmail, accountPassword, accountCity, accountState])

/*
prefer not to use var
bcz of issue in block scope and functional scope
*/