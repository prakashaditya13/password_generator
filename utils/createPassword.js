const alpha =  'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '0123456789'
const symbols = '!@#$%^&*_-+='

const createPassword = (length = '8', hasNumber = true, hasSymbols = true) => {
    let chars = alpha
    hasNumber ? (chars+=numbers) : ''
    hasSymbols ? (chars+=symbols) : ''
    return generatedPasscode(length, chars)
}

const generatedPasscode = (len, passcode) => {
    let password = ''
    for(let i = 0; i < len; i++){
        password += passcode.charAt(Math.floor(Math.random() * passcode.length))
    }
    return password
}

module.exports = createPassword