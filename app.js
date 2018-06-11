// console.log('Starting app.js');

const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs');

const notes = require('./notes.js');

const titleOptions = {
    describe: 'Title of note',
    demand: true,
    alias: 't'
};

const bodyOptions = {
  describe: 'Body of the note',
  demand: true,
  alias: 'b'
};

const argv = yargs
  .command('add','Add a new note.', {
    title: titleOptions,
    body: bodyOptions
  })
  .command('list','List all notes')
  .command('read','Read a note',{
      title: titleOptions
  })
  .command('remove','Remove a note', {
    title: titleOptions
  })
  .help()
  .argv;
var command = argv._[0];
// console.log('Command: ', command);
// console.log('Yargs', argv);

if (command === 'add') {
  var note = notes.addNote(argv.title, argv.body);
  //If the note was added, let the user know it was saved.
  if (note){
    console.log('Note created');
    notes.logNote(note);
  }else{
    console.log('Not title not saved.')
  }
} else if (command === 'list') {
    var allnotes = notes.getAll();
    console.log(`Printing ${allnotes.length} note(s).`);
    allnotes.forEach((note) =>     notes.logNote(note));

} else if (command === 'read') {
  // console.log('Read note.');
  var note = notes.getNote(argv.title);
  if(note){
    console.log('Note found');
    notes.logNote(note);
  }else{
    console.log('Note not found.');
  }

} else if (command === 'remove') {
  var noteRemoved = notes.removeNote(argv.title);
  var message = noteRemoved ? 'Note was remvoed' : 'Note not found';
  console.log(message);
} else {
  console.log('Command not recognized');
}
