const accountId = 144553  //which value is stored using const never be change
let accountEmail = "hitesh@google.com" //its access in scope only 
var accountPassword = "12345"   //  access everywhere
accountCity = "Jaipur"
let accountState; // in which vakue is undefined

// accountId = 2 // not allowed
// we can cahange the value of let ,char , and without defing datatype value;

accountEmail = "hc@hc.com"
accountPassword = "21212121"
accountCity = "Bengaluru"

console.log(accountId); // print value

/*
Prefer not to use var
because of issue in block scope and functional scope
*/


console.table([accountId, accountEmail, accountPassword, accountCity, accountState]) // use to print all the value in table formet;
