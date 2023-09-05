const accountId = 12345
let accountEmail = 'akash@gaurav.com'
var accountAddress = 'Patna, Bihar'
accountCity = 'Patna' // We can also define variable using this but not a recommended method.
let accountState;


// accountId = 223 - It's not allowed as it is a constant
/*
 accountEmail = 'test@akash.com'
 accountAddress = 'Katihar, Bihar'
 accountCity = 'Katihar'
 */

/*
Note: - Never try to use "var" for declaring the variable in js file
        as var doesn't have the block scope & function scope hence makes conflicts in 
        other places while defining the same variable name.
*/

console.table([accountId, accountEmail, accountAddress, accountCity, accountState])