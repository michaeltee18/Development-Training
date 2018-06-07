console.log('Starting notes.js');

const fs = require('fs');

var fetchNotes = () => {

    try{
      var notesString = fs.readFileSync('notes-data.json');
      return JSON.parse(notesString);
    } catch(e){
      return [];
    }
};
var saveNotes = (notes) => {
    fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

var addNote = (title, body) => {
  // console.log('Adding note', title, body);
  var notes = fetchNotes();
  var note ={
    title,
    body
  };
var duplicateNotes = notes.filter((note) => note.title === title);

  if(duplicateNotes.length === 0){
    //adds to current note
    notes.push(note);
    saveNotes(notes);
    return note;
  }
};

var getAll = () => {
  console.log('Getting all notes');
};

var getNote = (title) => {
  // console.log('Getting note', title);
  //fetch note, filter to only return notes who's title matching the one passed in. Return that note to app.  Notes.filter will alwasy
  // be array.  select the first item.
  var notes = fetchNotes();
  var filteredNotes = notes.filter((note) => note.title === title);
  return filteredNotes[0];
};

var removeNote = (title) => {
  // console.log('Removing note', title);

  //fetch Notes
  var notes = fetchNotes();

  // filter notes, removing the one with title of argument
  var filteredNotes = notes.filter((note) => note.title !== title);
  saveNotes(filteredNotes);
 return notes.length !== filteredNotes.length;
};

var logNote = (note) =>{
  console.log('--')
  console.log(`Title: ${note.title}`);
  console.log(`Body: ${note.body}`);
};

module.exports = {
  addNote,
  getAll,
  getNote,
  removeNote,
  logNote
};
