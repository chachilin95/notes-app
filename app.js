const chalk = require('chalk');
const notes = require('./notes');

const command = process.argv[2];
switch (command) {
    case 'add':
        console.log('adding note');
        break;
    case 'remove':
        console.log('removing note');
        break;
    default:
        console.log(chalk.bgRed('unknown command'));
        break;
}