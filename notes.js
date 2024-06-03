const fs = require('fs');
const colors = require('colors');

const notes = [];

/** FUNCTION TO LOAD ALL THE NOTES ALREADY ADDED BY THE USER */
const loadNotes = () => {
  try {
    // If the file doesn't exist, create a new file
    if (!fs.existsSync('notes.json')) {
      fs.writeFileSync('notes.json', '[]');
    }
    const dataBuffer = fs.readFileSync('notes.json');
    const dataJson = dataBuffer.toString(); // converts hexadecimal buffer format to string
    return JSON.parse(dataJson); // return the parsed notes array
  } catch (error) {
    console.log('Failed to load the notes'.red.bold);
    return []; // return an empty array if there's an error or the file doesn't exist
  }
};

/** FUNCTION TO SAVE THE NOTES IN THE 'notes.json' */
const saveNotes = (notes) => {
  // notes is a JS array of objects
  const notesJson = JSON.stringify(notes); // converting JS to JSON
  fs.writeFileSync('notes.json', notesJson);
};

/** 1. add - FUNCTION TO ADD A NEW NOTE IN THE 'notes.json' FOR THE USER */
const addNote = (title, body) => {
  try {
    const notes = loadNotes(); // loading the previously existing notes list

    // Checking for duplicates
    const duplicateNote = notes.find((note) => note.title === title);
    if (duplicateNote) {
      return console.log('Note title already taken'.red.bold.underline);
    }

    const note = { title, body }; // converting it to an object
    notes.push(note); // adding to existing array of notes
    console.log('Note successfully added!'.green.bold.underline);
    saveNotes(notes); // writing to file
  } catch (error) {
    console.log('Failed to add the new note!'.red.bold);
  }
};

/** 2. remove - FUNCTION TO REMOVE A NOTE WITH THE GIVEN TITLE */
const removeNote = (title) => {
  const notes = loadNotes();

  const filteredNotes = notes.filter((note) => note.title !== title);

  if (notes.length > filteredNotes.length) {
    console.log('Note has been successfully removed'.green.bold.underline);
    saveNotes(filteredNotes);
  } else {
    return console.log(
      `Note with title = ${title} not found!`.red.bold.underline
    );
  }
};

/** 3. list - FUNCTION TO LIST ALL THE SAVED NOTES OF THE USER */
const listNotes = () => {
  try {
    const notes = loadNotes();

    if (notes.length == 0) {
      console.log(
        "No notes present!\nUse 'add' command to add a new one.".yellow.bold
      );
      return;
    }
    console.log('Your notes: '.yellow.bold);

    // Displaying each node's title
    notes.forEach((note, i) => {
      console.log(`Title ${i + 1}:`.underline.cyan + ` ${note.title}`.cyan);
    });
  } catch (error) {
    console.log('Failed to list the notes!'.red.bold);
  }
};

/** 4. read - FUNCTION TO READ A NOTE WITH THE GIVEN TITLE */
const readNote = (title) => {
  const notes = loadNotes();
  const foundNote = notes.find((note) => note.title === title);

  if (!foundNote)
    return console.log(
      `No such note with title ${title} found!`.red.bold.underline
    );

  // If found
  console.log(foundNote.title.green.bold);
  console.log('-------------'.yellow);
  console.log(foundNote.body.cyan.underline);
};

/** 5. update - FUNCTION TO UPDATE A NOTE */
const updateNote = (title, updatedBody) => {
  const notes = loadNotes();

  const updatedNotes = notes.map((note) => {
    if (note.title === title) {
      return { ...note, body: updatedBody };
    } else {
      return note;
    }
  });

  saveNotes(updatedNotes);
  console.log('Note updated successfully!'.green.bold.underline);
};

/** 6. removeAll - FUNCTION TO REMOVE ALL THE NOTES OF THE USER */
const removeAll = () => {
  saveNotes([]); // Save an empty array to the file
  console.log('All notes have been successfully removed'.green.bold.underline);
};

module.exports = {
  addNote,
  removeNote,
  listNotes,
  readNote,
  updateNote,
  removeAll,
};
