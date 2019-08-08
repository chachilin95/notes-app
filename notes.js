const fs = require('fs');
const chalk = require('chalk');

const getNotes = () => {
    return 'Your notes...';
};

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json');
        const dataJSON = dataBuffer.toString();        
        return JSON.parse(dataJSON);
    } catch (e) {
        return [];
    }
};

const saveNotes = (notes) => {
    const dataJSON = JSON.stringify(notes);
    fs.writeFileSync('notes.json', dataJSON);
};

const noteToString = ({ title, body }) => (
    chalk.yellow(title) + '\n' +
    chalk.grey(body)
);

const add = (title, body) => {
    const notes = loadNotes();
    const duplicateNotes = notes.filter((note) => note.title === title);

    if (duplicateNotes.length === 0) {
        notes.push({ title, body });
        saveNotes(notes);
        console.log(chalk.green.inverse('New note added!'));
    } else {
        console.log(chalk.red.inverse('Note title taken.'));
    }
};

const remove = (title) => {
    const notes = loadNotes();
    const filteredNotes = notes.filter((note) => note.title !== title);

    if (notes.length === filteredNotes.length) {
        console.log(chalk.red.inverse(`The note (${title}) was not found.`))
    } else {
        saveNotes(filteredNotes);
        console.log(chalk.green.inverse(`The note (${title}) was removed!`));
    }
};

const list = () => {
    const notes = loadNotes();

    console.log(chalk.inverse('--- Your Notes ---'));
    notes.forEach((note) => {
        console.log(noteToString(note));
        console.log('-----');
    });
};

const read = (title) => {
    const notes = loadNotes();
    const note = notes.find((note) => note.title === title);

    if (note) {
        console.log(chalk.inverse('--- Your Note ---'));
        console.log(noteToString(note));
        console.log('-----');
    } else {
        console.log(chalk.red.inverse('No note was found.'));
    }    
};

module.exports = {
    getNotes,
    add,
    remove,
    list,
    read
};