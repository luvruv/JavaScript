const account_Id = 144553
let accountEmail = "dhruv@google.com"
var accountPassword = "12345"
accountCity = "ajmer"
let accountState;
// account_Id = 2
// scope {} loop code (var not use)
accountEmail = "dr@.com"
accountPassword = "121212"
accountCity = "jaipur"
console.log(account_Id);
/*
prefer not to use var because of issue in block scope and functional scope
*/
console.table([accountEmail, accountPassword, account_Id, accountCity, accountState])