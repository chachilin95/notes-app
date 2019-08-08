const yargs = require('yargs');
const notes = require('./notes');

// customize yargs version
yargs.version('1.0.0');

// create add command
yargs.command({
    command: 'add',
    describe: 'Add a new note',
    builder: {
        title: { 
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note body',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({ title, body }) => notes.add(title, body)    
});

// create remove command
yargs.command({
    command: 'remove',
    describe: 'Remove a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({ title }) => notes.remove(title)
});

// create list command
yargs.command({
    command: 'list',
    describe: 'List the notes',
    handler: () => notes.list()
});

// create read command
yargs.command({
    command: 'read',
    describe: 'Read a note',
    builder: {
        title: {
            describe: 'Note title',
            demandOption: true,
            type: 'string'
        }
    },
    handler: ({ title }) => notes.read(title)
});

yargs.parse();