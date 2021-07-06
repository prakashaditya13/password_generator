const program = require('commander')
const chalk = require('chalk')
const clipcopy = require('clipboardy')
const createPassword = require('./utils/createPassword')
const savePassword = require('./utils/savePassword')
const log = console.log
program.version('1.0.0').description('A Password Generator using CLI in nodejs')

program
    .option('-l, --length <number>', 'length of password', '8')
    .option('-s, --save', 'save password to .txt file')
    .option('-nn, --no-num', 'remove numbers')
    .option('-ns, --no-symbols', 'remove symbols')
    .parse()

const {length, save, number, symbols} = program.opts()

// generate password

const generatedPassword = createPassword(length, number, symbols)

if(save){
    savePassword(generatedPassword)
}

// copy to clipboard
clipcopy.writeSync(generatedPassword)

log(chalk.blue('Generated Password: ') + chalk.bold(generatedPassword))
log(chalk.yellow('Password copy to clipboard!'))