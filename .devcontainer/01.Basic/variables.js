const accountId=12345
let accountEmail="pra2@gmail.com"
var accountPassword="pravas123"
accountCity="BBSR"  // it is possible in javascript but it is not preferable
let accountState;


// accountId=2345    // this is not changeable because it's constant
console.log(accountId);
console.table([accountId,accountEmail,accountPassword,accountCity])


accountEmail="ghbdfjbn@gmail.com"
accountPassword="gjnhsijg"
accountCity="balesore"
console.table([accountId,accountEmail,accountPassword,accountCity,accountState])

/*
prefer not to use var  because of an issue in block scope and function scope
*/