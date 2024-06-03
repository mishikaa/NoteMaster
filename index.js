const yargs = require('yargs');
const {
  addNote,
  removeNote,
  listNotes,
  readNote,
  updateNote,
  removeAll,
} = require('./notes.js');

// Assign a version to our command line tool
yargs.version('1.1.0');

// Command to add a note
yargs.command({
  command: 'add',
  describe: `Add a new note\n Arguments: title, body`,
  // Stores the arguments - An object to store the options of the given command
  builder: {
    title: {
      describe: 'Note Title',
      type: 'string',
      demandOption: true, // denotes the required option
    },
    body: {
      describe: 'Note Body',
      type: 'string',
      demandOption: true,
    },
  },
  handler: function ({ title, body }) {
    addNote(title, body);
  },
});

// Command to remove a note
yargs.command({
  command: 'remove',
  describe: 'Remove a Note\n Argument: title',
  builder: {
    title: {
      describe: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: function ({ title }) {
    removeNote(title);
  },
});

// Command to list all the notes
yargs.command({
  command: 'list',
  description: 'List all notes\n Arguments: none',
  handler: () => {
    listNotes();
  },
});

// Command to read a single note
yargs.command({
  command: 'read',
  description: 'Read a note\n Arguments: title',
  builder: {
    title: {
      descripton: 'Note Title',
      demandOption: true,
      type: 'string',
    },
  },
  handler: ({ title }) => {
    readNote(title);
  },
});

// Command to update a single note
yargs.command({
  command: 'update',
  description: 'Update a Note\n Arguments: title, body',
  builder: {
    title: {
      description: 'Note Title',
      demandOption: true,
      type: 'string',
    },
    body: {
      description: 'Note Body',
      demandOption: true,
      type: 'string',
    },
  },
  handler: ({ title, body }) => {
    updateNote(title, body);
  },
});

yargs.command({
  command: 'removeAll',
  description: 'Delete all the existing notes\n Arguments: none',
  handler: () => {
    removeAll();
  },
});

// console.log(yargs.argv); // let yargs to know that these need to be handled

// To Tell yargs to handle the options/commands passed
yargs.parse();
