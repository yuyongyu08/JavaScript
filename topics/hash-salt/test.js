let { getSalt, getHash, checkSaltHash } = require('./index')

let password = 'MYPASSWORD'
let salt = getSalt()
let hash = getHash(password, salt)



console.log(checkSaltHash(password, salt, hash));