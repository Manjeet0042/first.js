const accountId = 144458
let accountEmail = "manjeet@google.com"
var accountPassword = "123456"
accountCity = "Jaipur"

// accountId = 2 not allowed

accountEmail = "sumit@ggmail.com"
accountPassword = "145879"
accountCity = "delhi"

console.log(accountId);

/*
prefer not to use var
because of issue in block scope and functional scope
*/

console.table([accountEmail,accountId,accountPassword,accountCity])
