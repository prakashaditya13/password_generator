const fs = require('fs')
const path = require('path')
const os = require('os')
const chalk = require('chalk')

const savePassword = (passcode) => {
    fs.open(path.join(__dirname, '../', 'password.txt'), 'a', 666, (e, id) => {
        fs.write(id, passcode + os.EOL, null, 'utf-8', () => {
            fs.close(id, () => {
                console.log(chalk.green('Password saved to password.txt file'))
            })
        })
    })
}


module.exports = savePassword